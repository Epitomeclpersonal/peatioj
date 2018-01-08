package org.peatio.common.config;

import org.jooq.SQLDialect;

public enum DBTYPE {
    // commercial dbms not supproted by jooq open source license.
    HSQLDB, H2DB, MARIADB, MYSQL, PGSQL, /* ORACLE, MSSQL */;

    private final String sqlMapConfigPath;
    private final String initSqlPathPrefix;
    private final String db_properties_filename;

    DBTYPE() {
        String dbtypename = name().toLowerCase();
        sqlMapConfigPath = "/config/" + dbtypename;
        initSqlPathPrefix = "/config/" + dbtypename + "/init/";
        db_properties_filename = "/db/" + dbtypename + "/db.properties";
    }

    public String get_sqlMapConfigPath() {
        return sqlMapConfigPath;
    }

    public String getInitSqlPathPrefix() {
        return initSqlPathPrefix;
    }

    public String get_db_properties_filename() {
        return db_properties_filename;
    }

    public SQLDialect getSQLDialect() {
        switch (this) {
            case HSQLDB:
                return SQLDialect.HSQLDB;
            case H2DB:
                return SQLDialect.H2;
            case MARIADB:
                return SQLDialect.MARIADB;
            case MYSQL:
                return SQLDialect.MYSQL;
            case PGSQL:
                return SQLDialect.POSTGRES;
        }
        return SQLDialect.DEFAULT;
    }

}