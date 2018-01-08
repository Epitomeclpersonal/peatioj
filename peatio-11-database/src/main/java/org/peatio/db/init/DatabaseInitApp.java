package org.peatio.db.init;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.invoke.MethodHandles;

public class DatabaseInitApp {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    public static void main(String[] args) {
        logger.info("DatabaseInitApp - start");
        DatabaseInitApp serverInit = new DatabaseInitApp();
        try {
            serverInit.run();
        } catch (Exception e) {
            logger.error(ExceptionUtils.getStackTrace(e));
        }
        logger.info("DatabaseInitApp - end");
    }

    private final DatabaseMgr databaseMgr;

    private DatabaseInitApp() {
        databaseMgr = new DatabaseMgr();
    }

    public void run() throws Exception {
        logger.info("START: Destroying and Initializing Database");
        databaseMgr.destroyDb();
        databaseMgr.startDB();
        databaseMgr.doDDL();
        databaseMgr.stopDB();
        logger.info("FINISH: Destroying and Initializing Database");
    }
}
