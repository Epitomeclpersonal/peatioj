package org.peatio.db.jdbc.mysql;

import com.wix.mysql.EmbeddedMysql;
import com.wix.mysql.config.DownloadConfig;
import com.wix.mysql.config.MysqldConfig;
import org.peatio.common.config.HomeConfigurator;

import java.util.concurrent.TimeUnit;

import static com.wix.mysql.EmbeddedMysql.anEmbeddedMysql;
import static com.wix.mysql.config.Charset.UTF8;
import static com.wix.mysql.config.DownloadConfig.aDownloadConfig;
import static com.wix.mysql.config.MysqldConfig.aMysqldConfig;
import static com.wix.mysql.distribution.Version.v5_7_latest;

public class MysqlWrapper {

    public static void main(String[] aa) {
        MysqlWrapper mysqlWrapper = new MysqlWrapper();
        mysqlWrapper.start();
    }

    public void start() {
        MysqldConfig config = aMysqldConfig(v5_7_latest)
                .withCharset(UTF8)
                .withPort(2215)
                .withUser("differentUser", "anotherPassword")
                .withTimeZone("Europe/Vilnius")
                .withTimeout(2, TimeUnit.MINUTES)
                .withServerVariable("max_connect_errors", 666)
                .build();

        DownloadConfig downloadConfig = aDownloadConfig()
                .withCacheDir(HomeConfigurator.getTmpDir())
                .build();

        EmbeddedMysql mysqld = anEmbeddedMysql(config, downloadConfig)
//                .addSchema("aschema", ScriptResolver.classPathScript("db/001_init.sql"))
//                .addSchema("aschema2", ScriptResolver.classPathScripts("db/*.sql"))
                .start();

//do work

        mysqld.stop(); //optional, as there is a shutdown hook
    }
}
