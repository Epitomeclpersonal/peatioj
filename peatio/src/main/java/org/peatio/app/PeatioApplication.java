package org.peatio.app;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {"org.peatio.config"})
public class PeatioApplication {

    public static void main(String[] args) throws Exception {
        new SpringApplicationBuilder(PeatioApplication.class).run(args);
    }

}
