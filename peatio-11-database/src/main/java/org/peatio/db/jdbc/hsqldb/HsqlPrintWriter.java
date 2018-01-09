package org.peatio.db.jdbc.hsqldb;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.PrintWriter;

public class HsqlPrintWriter extends PrintWriter {
    private Logger logger;
    private boolean errorWriter;
    private StringBuilder text = new StringBuilder("");

    public HsqlPrintWriter(boolean errorWriter) {
        super(System.err);
        logger = LoggerFactory.getLogger(HsqlPrintWriter.class);
        this.errorWriter = errorWriter;
    }

    @Override
    public void close() {
        flush();
    }

    private void flushLine() {
        if (!errorWriter) {
            logger.info(text.toString());
        } else {
            logger.error(text.toString());
        }
        text.setLength(0);
    }

    @Override
    public void flush() {
        if (!text.toString().equals("")) {
            flushLine();
        }
    }

    @Override
    public void print(boolean b) {
        text.append(b);
    }

    @Override
    public void print(char c) {
        text.append(c);
    }

    @Override
    public void print(char[] s) {
        text.append(s);
    }

    @Override
    public void print(double d) {
        text.append(d);
    }

    @Override
    public void print(float f) {
        text.append(f);
    }

    @Override
    public void print(int i) {
        text.append(i);
    }

    @Override
    public void print(long l) {
        text.append(l);
    }

    @Override
    public void print(Object obj) {
        text.append(obj);
    }

    @Override
    public void print(String s) {
        text.append(s);
    }

    @Override
    public void println() {
        if (!text.toString().equals("")) {
            flushLine();
        }
    }

    @Override
    public void println(boolean x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(char x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(char[] x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(double x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(float x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(int x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(long x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(Object x) {
        text.append(x);
        flushLine();
    }

    @Override
    public void println(String x) {
        text.append(x);
        flushLine();
    }
}
