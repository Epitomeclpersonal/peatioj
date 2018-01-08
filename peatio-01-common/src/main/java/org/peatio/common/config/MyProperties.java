package org.peatio.common.config;

import org.apache.commons.configuration2.AbstractConfiguration;
import org.apache.commons.configuration2.Configuration;
import org.apache.commons.configuration2.ConfigurationConverter;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;
import java.io.IOException;
import java.lang.invoke.MethodHandles;
import java.util.Properties;

public class MyProperties {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    //region static part

    private static MyProperties instance;

    public static MyProperties getInstance() {
        if (instance == null) {
            instance = new MyProperties();
        }
        return instance;
    }
    //endregion


    //region constructor

    private final Properties properties;

    protected MyProperties() {
        /////////////////////////////////////////////
        // [1] construct props
        // 1. load appconf.properties
        // 2. load db.properties
        // 3. putAll parentProperties
        /////////////////////////////////////////////
        Properties props = new Properties();
        String confDir = HomeConfigurator.getConfDir();

        // 1. load appconf.properties
        try {
            String defaultPropertiesFilename = "/appconf.properties";
            props.load(new FileInputStream(confDir + "/" + defaultPropertiesFilename));
        } catch (IOException e) {
            logger.error(ExceptionUtils.getStackTrace(e));
        }

        // 2. load db properties
        // 2.1 dbtype
        String props_dbtype = props.getProperty(AppConfInfo.CONFIG_DBTYPE);
        DBTYPE dbtype = DBTYPE.valueOf(props_dbtype.toUpperCase());
        // 2.2 dbtype에 의해 결정되는 file 들
        String sqlMapConfigPath = dbtype.get_sqlMapConfigPath();
        String db_properties_filename = confDir + dbtype.get_db_properties_filename();
        try {
            logger.info(db_properties_filename);
            props.load(new FileInputStream(db_properties_filename));
        } catch (IOException e) {
            logger.error(ExceptionUtils.getStackTrace(e));
        }


        /////////////////////////////////////////////
        // [2] put new property with pre-setting values
        /////////////////////////////////////////////


        /////////////////////////////////////////////
        // [3] get properties of ip address and port
        /////////////////////////////////////////////


        /////////////////////////////////////////////
        // [4] overwrite property with pre-setting values
        /////////////////////////////////////////////


        /////////////////////////////////////////////
        // [5] Value Interpolation
        /////////////////////////////////////////////
        // Create a configuration for the properties for easy access
        AbstractConfiguration config = (AbstractConfiguration) ConfigurationConverter.getConfiguration(props);
        // Now use the Configuration API for manipulating the configuration data
        Configuration extConfig = config.interpolatedConfiguration();
        // Return a Properties object with the results
        this.properties = ConfigurationConverter.getProperties(extConfig);

        logger.debug("{}", properties);
        logger.info(this.getClass().getSimpleName() + " initialized");
    }
    //endregion

    //region getObject

    /*
     * 중요!! - setServletContext()에의해 parentProperties 지정 이후에 호출됨.
     * server_properties, parentProperties, pre-setting 값들을 활용하여, properties 를
     * 생성한다.
     */
    public Properties getObject() {
        return properties;
    }
    //endregion


    //region getters

    /////////////////////////
    // for DatabaseInit and tests
    /////////////////////////
    public DBTYPE getDBTYPE() {
        return DBTYPE.valueOf(getObject().getProperty(AppConfInfo.CONFIG_DBTYPE).toUpperCase());
    }
    //endregion
}
