package org.peatio.db.init;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.apache.ibatis.exceptions.PersistenceException;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.hsqldb.HsqlException;
import org.hsqldb.server.ServerAcl.AclFormatException;
import org.peatio.common.StringUtil;
import org.peatio.common.config.AppConfInfo;
import org.peatio.common.config.DBTYPE;
import org.peatio.common.config.MyProperties;
import org.peatio.common.exception.ServerWarningException;
import org.peatio.db.jdbc.hsqldb.HsqldbWrapper;
import org.peatio.db.jdbc.mysql.MysqlWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.sql.DataSource;
import java.io.*;
import java.lang.invoke.MethodHandles;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class DatabaseMgr {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    private final DBTYPE dbtype;

    private final String def_driverClassname;
    private final String def_url;
    private final String def_sys_username;
    private final String def_sys_password;
    private final String def_system_username;
    private final String def_system_password;
    private final String def_user_username;
    private final String def_user_password;
    private final String tablespace;

    public DatabaseMgr() {
        MyProperties myProperties = MyProperties.getInstance();
        Properties resourceBundle = myProperties.getObject();
        this.dbtype = DBTYPE.valueOf(resourceBundle.getProperty(AppConfInfo.CONFIG_DBTYPE).toUpperCase());

        // FIXME : datasource 가 여러개일 경우, 각 datasource 별로 따로 create table을 다 해줘야 한다.
        // get datasource
        this.def_driverClassname = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_DRIVERCLASSNAME);
        this.def_url = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_URL);
        this.def_sys_username = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_SYS_USERNAME);
        this.def_sys_password = StringUtil.decodeBase64(resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_SYS_PASSWORD));
        this.def_system_username = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_SYSTEM_USERNAME);
        this.def_system_password = StringUtil.decodeBase64(resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_SYSTEM_PASSWORD));
        this.def_user_username = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_USER_USERNAME);
        this.def_user_password = StringUtil.decodeBase64(resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_USER_PASSWORD));
        this.tablespace = resourceBundle.getProperty(AppConfInfo.CONFIG_DB_DEF_TABLESPACE);

        logger.info("===============================");
        logger.info("dataSource properties");
        logger.info("def_driverClassname : " + this.def_driverClassname);
        logger.info("def_url : " + this.def_url);
        logger.info("def_sys_username  : " + def_sys_username);
        logger.info("def_sys_password  : " + def_sys_password);
        logger.info("def_system_username  : " + def_system_username);
        logger.info("def_system_password  : " + def_system_password);
        logger.info("def_user_username  : " + def_user_username);
        logger.info("def_user_password  : " + def_user_password);
        logger.info("If you want to change dataSource properties, please modify db.properties file.");
        logger.info("");

    }


    public void run() throws Exception {
        logger.info("START: Destroying and Initializing Database");
        destroyDb();
        startDB();
        doDDL();
        stopDB();
        logger.info("FINISH: Destroying and Initializing Database");
    }

    public void destroyDb() throws AclFormatException, IOException {
        String data_dir;
        switch (this.dbtype) {
            case HSQLDB:
                data_dir = HsqldbWrapper.destroyDb();
                logger.info("removed: {}", data_dir);
                break;
            case H2DB:
                break;
            case MARIADB:
                break;
            case MYSQL:
                break;
            case PGSQL:
                break;
        }
    }

    private void runScript(DataSource ds, String[] scripts, Map<String, Object> substMap) throws SQLException, IOException, ClassNotFoundException {
        Class.forName(this.def_driverClassname);
        Connection conn = ds.getConnection();
        ScriptRunner runner = new ScriptRunner(conn);
        runner.setDelimiter(";");
        runner.setLogWriter(new PrintWriter(new OutputStream() {
            @Override
            public void write(int b) {
            }
        }));
        runner.setErrorLogWriter(new PrintWriter(System.err));

        for (String resource : scripts) {
            String target = IOUtils.toString(this.getClass().getResourceAsStream(resource), Charset.defaultCharset());
            target = valueInterpolation(target, substMap);
            Reader reader = new StringReader(target);
            runner.runScript(reader);
            conn.commit();
            reader.close();
        }
    }

    private String valueInterpolation(String target, Map<String, Object> substMap) {
        if (substMap == null) {
            return target;
        }
        StrSubstitutor sub = new StrSubstitutor(substMap);
        return sub.replace(target);
    }

    public void doDDL() throws Exception {
        String username = this.def_user_username;
        String password = this.def_user_password;
        String tablespace = this.tablespace;
        DataSource sqlSessionTemplateLocalDefdbSystem = datasourceLocalDefdbSystem();

        Map<String, Object> params = new HashMap<>();
        params.put("username", username);
        params.put("password", password);
        params.put("tablespace", tablespace);
        params.put("size", "500m");

        String pathPrefix = dbtype.getInitSqlPathPrefix();
        logger.info("dropping user");
        try {
            runScript(sqlSessionTemplateLocalDefdbSystem, new String[]{pathPrefix + "crt_01_user.sql"}, params);
        } catch (PersistenceException e1) {
            Throwable cause = e1.getCause();
            if (cause instanceof SQLException) {
                SQLException se = (SQLException) cause;
                int errorCode = se.getErrorCode();
//				ORA-01918: 사용자 'CENT'(이)가 존재하지 않습니다
//				ORA-01940: 현재 접속되어 있는 사용자는 삭제할 수 없습니다
//				ORA-01920: 사용자명 'CENT'(이)가 다른 사용자나 롤 이름과 상충됩니다
                if (errorCode == 1918) {
                    logger.info(se.getMessage());
                }
                // invalid authorization specification - not found
                else if (errorCode == -org.hsqldb.error.ErrorCode.X_28501) {
                    logger.info(se.getMessage());
                }
                // cannot drop a user that is currently connected
                else if (errorCode == -org.hsqldb.error.ErrorCode.X_42539) {
                    logger.info(se.getMessage());
                } else {
                    logger.info("{}", cause);
                    logger.info("{}", errorCode);
                    throw e1;
                }
            } else if (cause instanceof HsqlException) {
                HsqlException se = (HsqlException) cause;
                int errorCode = se.getErrorCode();
                // invalid authorization specification - not found
                if (errorCode == -org.hsqldb.error.ErrorCode.X_28501) {
                    logger.info(se.getMessage());
                }
                // cannot drop a user that is currently connected
                else if (errorCode == -org.hsqldb.error.ErrorCode.X_42539) {
                    logger.info(se.getMessage());
                } else {
                    logger.info(cause + "");
                    logger.info("{}", errorCode);
                    throw e1;
                }
            } else {
                throw e1;
            }
        }

        DataSource sqlSessionTemplateLocalDefdbSys = datasourceLocalDefdbSys();
        runScript(sqlSessionTemplateLocalDefdbSys, new String[]{pathPrefix + "crt_02_ddl.sql"}, params);
        logger.info("DONE: crtUser");

        DataSource sqlSessionTemplateLocalDefdbUser = datasourceLocalDefdbUser();

        runScript(sqlSessionTemplateLocalDefdbUser, new String[]{pathPrefix + "crt_03_dml.sql"}, params);
        logger.info("DONE: crtTruncate");
    }

    // datasource
    private DataSource datasourceLocalDefdbSys() {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName(this.def_driverClassname);
        basicDataSource.setUrl(this.def_url);
        basicDataSource.setUsername(this.def_sys_username);
        basicDataSource.setPassword(this.def_sys_password);
        return basicDataSource;
    }

    private DataSource datasourceLocalDefdbSystem() {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName(this.def_driverClassname);
        basicDataSource.setUrl("jdbc:mysql://localhost:3310/mysql");
        basicDataSource.setUsername(this.def_system_username);
        basicDataSource.setPassword(this.def_system_password);
        return basicDataSource;
    }

    public DataSource datasourceLocalDefdbUser() {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName(this.def_driverClassname);
        basicDataSource.setUrl(this.def_url);
        basicDataSource.setUsername(this.def_user_username);
        basicDataSource.setPassword(this.def_user_password);
        return basicDataSource;
    }

    private HsqldbWrapper hsqldbWrapper;
    private MysqlWrapper mysqlWrapper;

    public void startDB() {
        startDB(this.def_url, this.dbtype);
    }

    public void startDB(String database_url, DBTYPE dbtype) {
        switch (dbtype) {
            case HSQLDB:
                try {
                    this.hsqldbWrapper = new HsqldbWrapper(database_url);
                    this.hsqldbWrapper.start();
                    if (!this.hsqldbWrapper.isStarted()) {
                        throw new ServerWarningException("hsqldb does not started");
                    }
                    Collection<File> collectionFile = this.hsqldbWrapper.listDb();
                    logger.info("list: {}", collectionFile);
                    logger.info("hsqldbWrapper started.");
                } catch (Exception e) {
                    logger.error(ExceptionUtils.getStackTrace(e));
                }
                break;
            case H2DB:
                break;
            case MARIADB:
                break;
            case MYSQL:
                mysqlWrapper = new MysqlWrapper();
                mysqlWrapper.start();
                break;
            case PGSQL:
                break;
        }
    }

    public void stopDB() {
        try {
            if (this.hsqldbWrapper != null && this.hsqldbWrapper.isStarted()) {
                this.hsqldbWrapper.stop();
                logger.info("hsqldbWrapper stopped.");
            }

            if (mysqlWrapper != null) {
                mysqlWrapper.stop();
            }

        } catch (Exception e) {
            logger.error(ExceptionUtils.getStackTrace(e));
        }
    }

}
