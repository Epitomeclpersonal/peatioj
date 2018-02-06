package org.peatio.config;

import org.peatio.common.config.HomeConfigurator;
import org.peatio.db.init.DatabaseMgr;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

/**
 * http://www.baeldung.com/the-persistence-layer-with-spring-and-jpa
 */
@Configuration
public class JpaConfig {

    @Bean
    @Primary
    public DataSource dataSource() {
        DatabaseMgr databaseMgr = new DatabaseMgr();
        DataSource dataSource = databaseMgr.datasourceLocalDefdbUser();
        return dataSource;
    }

}
