package com.epitome.peatio;

import com.epitome.peatioj.Hello;
import org.junit.Assert;
import org.junit.Test;

public class HelloTest {
    @Test
    public void test() {
        Hello hello = new Hello();

        String res = hello.sayHello();
        Assert.assertEquals("Hello!!", res);
    }
}
