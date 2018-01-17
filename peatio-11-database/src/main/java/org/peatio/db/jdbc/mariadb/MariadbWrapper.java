package org.peatio.db.jdbc.mariadb;

import ch.vorburger.exec.ManagedProcessException;
import ch.vorburger.mariadb4j.DB;
import ch.vorburger.mariadb4j.DBConfiguration;
import ch.vorburger.mariadb4j.DBConfigurationBuilder;
import org.apache.commons.io.FileUtils;
import org.peatio.common.config.AppConfInfo;
import org.peatio.common.config.HomeConfigurator;
import org.peatio.common.config.MyProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.lang.invoke.MethodHandles;

public class MariadbWrapper {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    private static final String base_dir = HomeConfigurator.getDbDir() + "/mariadb/base";
    private static final String data_dir = HomeConfigurator.getDbDir() + "/mariadb/data";

    private final String dbName;
    private DB db;

    public MariadbWrapper(String database_url) throws Exception {
        this.dbName = "mydb";
    }

    public void start() throws ManagedProcessException {
        HomeConfigurator.changeLogConfiguration();

        DBConfiguration config = DBConfigurationBuilder.newBuilder()
                .setBaseDir(base_dir)
                .setDataDir(data_dir)
                .setPort(3306) // 0 => autom. detect free port
                .addArg("--lower-case-table-names=1") // 0 (Unix), 1 (Windows), 2 (Mac OS X)
                .build();
        this.db = DB.newEmbeddedDB(config);
        this.db.start();

        if (!this.dbName.equals("test")) {
            // mysqld out-of-the-box already has a DB named "test"
            // in case we need another DB, here's how to create it first
            this.db.createDB(this.dbName);
        }
    }

    public void stop() throws ManagedProcessException {
        if (this.db != null) {
            this.db.stop();
            this.db = null;
        }
    }

    public boolean isStarted() {
        return this.db != null;
    }

    public static String destroyDb() throws IOException {
        FileUtils.deleteDirectory(new File(data_dir));
        return data_dir;
    }

    public static void main(String[] args) throws Exception {
        String database_url = MyProperties.getInstance().getObject().getProperty(AppConfInfo.CONFIG_DB_DEF_URL);
        MariadbWrapper db = new MariadbWrapper(database_url);
        db.start();
    }
}
