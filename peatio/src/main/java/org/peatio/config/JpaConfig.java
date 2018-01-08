//package org.peatio.config;
//
//import org.peatio.common.config.HomeConfigurator;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//
//import javax.sql.DataSource;
//
///**
// * http://www.baeldung.com/the-persistence-layer-with-spring-and-jpa
// */
//@Configuration
//public class JpaConfig {
//
//    @Bean
//    @Primary
//    public DataSource dataSource() {
//        String db_dir = HomeConfigurator.getDbDir();
//
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//
//        dataSource.setDriverClassName("org.hsqldb.jdbcDriver");
//        dataSource.setUrl("jdbc:hsqldb:file:" + db_dir + "/hsqldb/mydb");
//        dataSource.setUsername("SA");
//        dataSource.setPassword("");
//
//        return dataSource;
//    }
//
//}
