package com.epitome.peatioj.controller.api;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = {"hello API"})
public class PeatiojApi {
    @RequestMapping(value = "/api/hello", method = RequestMethod.GET)
    String sayHello(@RequestParam("name") String name) {
        return "Hello API : " + name;
    }
}