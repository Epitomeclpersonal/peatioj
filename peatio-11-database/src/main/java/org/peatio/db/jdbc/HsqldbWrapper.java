package org.peatio.db.jdbc;

import org.apache.commons.io.FileUtils;
import org.hsqldb.DatabaseURL;
import org.hsqldb.Server;
import org.hsqldb.persist.HsqlDatabaseProperties;
import org.hsqldb.persist.HsqlProperties;
import org.hsqldb.server.ServerAcl;
import org.hsqldb.server.ServerConstants;
import org.peatio.common.config.HomeConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.lang.invoke.MethodHandles;
import java.util.Collection;

public class HsqldbWrapper {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    private static final String data_dir = HomeConfigurator.getDbDir() + "/hsqldb";

    public static String destroyDb() throws IOException {
        // FIXME: hsqldb는 내부적으로 static member 가 많아서, stop/shutdown 후 다시 start 할 때,
        // 기존 static member 가 완전히 clear 되지 않은 상태로 start됨.
        // 따라서, 동일한 classloader 사용 시, stop 후에라도 파일을 삭제하면 다시 start 시 에러 발생
//		FileUtils.deleteDirectory(new File(data_dir));
        return data_dir;
    }

    public Collection<File> listDb() throws IOException {
        File directory = new File(data_dir);
        if (!directory.exists()) {
            logger.error("{} does not exist", directory);
        }
        Collection<File> collectionFile = FileUtils.listFiles(directory, null, true);
        return collectionFile;
    }

    private final Server hsqlServer;

    public HsqldbWrapper(String database_url) throws IOException, ServerAcl.AclFormatException {
        boolean hasPrefix = true;
        boolean noPath = false;
        HsqlProperties hsqlProperties = DatabaseURL.parseURL(database_url, hasPrefix, noPath);

        String connection_type = hsqlProperties.getProperty("connection_type");
        String db_name = hsqlProperties.getProperty("database");

        /// for hsql:// connection_type only
        int port_no = hsqlProperties.getIntegerProperty("port", -1);
        logger.info("port_no=" + port_no);
        String host = hsqlProperties.getProperty("host");
        String path = hsqlProperties.getProperty("path");

        if (logger.isDebugEnabled()) {
            logger.debug("database_url: {}", database_url);
            logger.debug("port_no: {}", port_no);
            logger.debug("db_name: {}", db_name);
        }

        // 데이터파일 저장 정보
        String propString = ";sql.syntax_ora=true;sql.enforce_strict_size=true;hsqldb.tx=mvcc";
        final String db_path = (port_no > 0) ? "file:" + data_dir + "/" + db_name + propString
                : "file:" + db_name + propString;
//		final String db_path = "mem:" + data_dir + "/" + db_name+propString;
        logger.debug("db_path: {}", db_path);

        // org.hsqldb.lib.FrameworkLogger 참고
        System.setProperty("hsqldb.reconfig_logging", "false"); // turn off logging "checkpointClose start/stop"
        this.hsqlServer = new Server();
        // HSQLDB prints out a lot of informations when
        // starting and closing, which we don't need now.
        // Normally you should point the setLogWriter
        // to some Writer object that could store the logs.
        if (logger.isDebugEnabled()) {
            this.hsqlServer.setLogWriter(new HsqlPrintWriter(false));
            this.hsqlServer.setSilent(false);
            this.hsqlServer.setTrace(true);
        } else {
            this.hsqlServer.setLogWriter(null);
            this.hsqlServer.setSilent(true);
            this.hsqlServer.setTrace(false);
        }

        // properties
        HsqlProperties props = new HsqlProperties();
        props.setProperty(HsqlDatabaseProperties.sql_syntax_ora, true);
        props.setProperty(HsqlDatabaseProperties.sql_enforce_strict_size, true);
        props.setProperty(HsqlDatabaseProperties.hsqldb_tx, "MVCC");
        this.hsqlServer.setProperties(props);

        // 접속 정보 (서버 설정)
        if (port_no > 0) {
            this.hsqlServer.setPort(port_no);
        }
        this.hsqlServer.setDatabaseName(0, db_name);
        // 데이터파일 저장 정보
        this.hsqlServer.setDatabasePath(0, db_path);
    }

    public void start() {
        this.hsqlServer.start();
    }

    public void stop() {
        this.hsqlServer.stop();
        this.hsqlServer.shutdown();
//        DatabaseManager.getTimer().shutdownImmediately();
    }

    public boolean isStarted() {
        return this.hsqlServer.getState() == ServerConstants.SERVER_STATE_ONLINE;
    }

    public boolean exists(String db_name) {
        File directory = new File(data_dir);
        if (!directory.exists()) {
            logger.error(directory + " does not exist");
        }
        Collection<File> collectionFile = FileUtils.listFiles(directory, null, true);

        boolean isExists = false;
        for (File f : collectionFile) {
            if (f.getName().equals(db_name)) {
                isExists = true;
            }
        }
        return isExists;
    }

}
