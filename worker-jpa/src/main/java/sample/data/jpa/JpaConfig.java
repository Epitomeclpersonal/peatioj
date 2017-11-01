package sample.data.jpa;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

/**
 * http://www.baeldung.com/the-persistence-layer-with-spring-and-jpa
 */
@Configuration
@ComponentScan(basePackages = {
        "sample.data.jpa"
})
public class JpaConfig {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();

        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://epitome.iptime.org:3306/myDb?createDatabaseIfNotExist=true");
        dataSource.setUsername("root");
        dataSource.setPassword("secret");

        return dataSource;
    }

}
