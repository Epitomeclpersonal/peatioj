package com.epitome.peatioj.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {
        "com.epitome.peatioj.controller"
})
public class PeatiojApplication {

    public static void main(String[] args) {
        SpringApplication.run(PeatiojApplication.class, args);
    }
}
