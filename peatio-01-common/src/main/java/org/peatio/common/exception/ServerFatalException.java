package org.peatio.common.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.invoke.MethodHandles;

public class ServerFatalException extends Exception {
    private static final Logger logger = LoggerFactory.getLogger(MethodHandles.lookup().lookupClass());
    private static final long serialVersionUID = 1L;

    public ServerFatalException(String errorCode) {
        super(ErrorCodeProperties.getMessage(errorCode) + ": " + (new LocationInfo(new Throwable(), ServerWarningException.class.getName())).getFullInfo());
    }
}
