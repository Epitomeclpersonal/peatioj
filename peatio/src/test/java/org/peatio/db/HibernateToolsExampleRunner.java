package org.peatio.db;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.hibernate.tool.ant.Hbm2JavaExporterTask;
import org.hibernate.tool.ant.HibernateToolTask;
import org.hibernate.tool.ant.JDBCConfigurationTask;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.lang.invoke.MethodHandles;

/**
 * <p>Simple example for programmatically generating JPA entity classes using <a href="http://hibernate.org/tools">Hibernate
 * Tools</a>. In this example an in-memory HSQL database is started with two simple tables. Those tables are generated
 * as JPA entity classes under <b>target/entities</b></p>
 *
 * @author nikkatsa
 */
public class HibernateToolsExampleRunner {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    private static final String PACKAGE_NAME = "generated.com.saladweek.paprika.db.hsqldb.entity";

    public static void main(final String[] args) {
        logger.info("**** Generating entity classes ****");

        try {
            final File destDir = new File("./worker-12-model-mybatis/src/main/java");
            final File hibernateConfig = new File("./peatio/src/test/resources/hibernate.cfg.xml");

            final HibernateToolTask entityGenerator = new HibernateToolTask();
            entityGenerator.setDestDir(destDir);

            final JDBCConfigurationTask jdbcConfiguration = entityGenerator.createJDBCConfiguration();
            jdbcConfiguration.setConfigurationFile(hibernateConfig);
            jdbcConfiguration.setDetectManyToMany(true);
            jdbcConfiguration.setDetectOneToOne(true);
            jdbcConfiguration.setPackageName(PACKAGE_NAME);
            jdbcConfiguration.execute();

            final Hbm2JavaExporterTask hbm2Java = (Hbm2JavaExporterTask) entityGenerator.createHbm2Java();
            hbm2Java.setEjb3(true);
            hbm2Java.setDestdir(destDir);
            hbm2Java.validateParameters();
            hbm2Java.execute();

            logger.info("**** Finished generating entity classes ({})", destDir.getAbsolutePath());
        } catch (Throwable e) {
            logger.error(ExceptionUtils.getStackTrace(e));
        } finally {
            System.exit(0);
        }
    }
}