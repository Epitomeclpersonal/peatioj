package org.peatio.common.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.invoke.MethodHandles;
import java.util.ResourceBundle;

public class ErrorCodeProperties {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());

    public static String getMessage(String errorCode) {
        String errMessage;
        try {
            ResourceBundle resourceBundle = ResourceBundle.getBundle("com.saladweek.paprika.sc.common.errorcode");


            errMessage = resourceBundle.getString(errorCode);

        } catch (Exception e) {
            errMessage = errorCode;
        }

        return errMessage;
    }
}
