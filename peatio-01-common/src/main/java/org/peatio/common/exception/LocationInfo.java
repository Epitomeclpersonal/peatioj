package org.peatio.common.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

public class LocationInfo {

    private static final String NotAvailable = "?";

    private static final String LINE_SEP = System.getProperty("line.separator");
    private static final int LINE_SEP_LEN = LINE_SEP.length();

    // Check if we are running in IBM's visual age.
    static boolean inVisualAge = false;

    static {
        try {
            inVisualAge = (Class.forName("com.ibm.uvm.tools.DebugSupport") != null);
        } catch (Throwable e) {
            // nothing to do
        }
    }

    private String fullyQualifiedClassName;
    private String fileName;
    private String lineNumber;
    private String methodName;
    /**
     * All available caller information, in the format <code>fully.qualified.classname.of.caller.methodName(Filename.java:line)</code>
     */
    private String fullInfo;

    /**
     * Instantiate location information based on a Throwable. We expect the Throwable <code>t</code>, to be in the format
     * <p>
     * <pre>
     * java.lang.Throwable
     *         ...
     *           at org.apache.log4j.PatternLayout.format(PatternLayout.java:413)
     *           at org.apache.log4j.FileAppender.doAppend(FileAppender.java:183)
     *         at org.apache.log4j.Category.callAppenders(Category.java:131)
     *         at org.apache.log4j.Category.log(Category.java:512)
     *         at callers.fully.qualified.className.methodName(FileName.java:74)
     * 	...
     * </pre>
     * <p>
     * <p>
     * However, we can also deal with JIT compilers that "lose" the location information, especially between the parentheses.
     */
    public LocationInfo(Throwable t, String fqnOfCallingClass) {
        if (t == null || fqnOfCallingClass == null) {
            return;
        }

        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);

        String s;
        // Protect against multiple access to sw.
        synchronized (stringWriter) {
            t.printStackTrace(printWriter);
            s = stringWriter.toString();
            stringWriter.getBuffer().setLength(0);
        }

        // Given the current structure of the package, the line
        // containing "org.apache.log4j.Category." should be printed just
        // before the caller.

        // This method of searching may not be fastest but it's safer
        // than counting the stack depth which is not guaranteed to be
        // constant across JVM implementations.
        int ibegin = s.lastIndexOf(fqnOfCallingClass + ".");
        if (ibegin == -1) {
            return;
        }
        ibegin = s.indexOf(LINE_SEP, ibegin);
        if (ibegin == -1) {
            return;
        }
        ibegin += LINE_SEP_LEN;

        // determine end of line
        int iend = s.indexOf(LINE_SEP, ibegin);
        if (iend == -1) {
            return;
        }

        // VisualAge has a different stack trace format which doesn't
        // need to skip the inital 'at'
        if (!inVisualAge) {
            // back up to first blank character
            ibegin = s.lastIndexOf("at ", iend);
            if (ibegin == -1) {
                return;
            }
            // Add 3 to skip "at ";
            ibegin += 3;
        }

        // everything between is the requested stack item
        this.fullInfo = s.substring(ibegin, iend);

        /**
         * the fully qualified class name of the caller.
         */
        if (this.fullInfo == null) {
            this.fullyQualifiedClassName = NotAvailable;
        } else {
            // Starting the search from '(' is safer because there is
            // potentially a dot between the parentheses.
            iend = this.fullInfo.lastIndexOf('(');
            if (iend == -1) {
                this.fullyQualifiedClassName = NotAvailable;
            } else {
                iend = this.fullInfo.lastIndexOf('.', iend);

                // This is because a stack trace in VisualAge looks like:

                // java.lang.RuntimeException
                // java.lang.Throwable()
                // java.lang.Exception()
                // java.lang.RuntimeException()
                // void test.test.B.print()
                // void test.test.A.printIndirect()
                // void test.test.Run.main(java.lang.String [])
                ibegin = 0;
                if (inVisualAge) {
                    ibegin = this.fullInfo.lastIndexOf(' ', iend) + 1;
                }

                if (iend == -1) {
                    this.fullyQualifiedClassName = NotAvailable;
                } else {
                    this.fullyQualifiedClassName = this.fullInfo.substring(ibegin, iend);
                }
            }
        }

        /**
         * the file name of the caller.
         *
         * <p>
         * This information is not always available.
         */
        if (this.fullInfo == null) {
            this.fileName = NotAvailable;
        } else {
            iend = this.fullInfo.lastIndexOf(':');
            if (iend == -1) {
                this.fileName = NotAvailable;
            } else {
                ibegin = this.fullInfo.lastIndexOf('(', iend - 1);
                this.fileName = this.fullInfo.substring(ibegin + 1, iend);
            }
        }

        /**
         * the line number of the caller.
         *
         * <p>
         * This information is not always available.
         */
        if (this.fullInfo == null) {
            this.lineNumber = NotAvailable;
        } else {
            iend = this.fullInfo.lastIndexOf(')');
            ibegin = this.fullInfo.lastIndexOf(':', iend - 1);
            if (ibegin == -1) {
                this.lineNumber = NotAvailable;
            } else {
                this.lineNumber = this.fullInfo.substring(ibegin + 1, iend);
            }
        }

        /**
         * the method name of the caller.
         */
        if (this.fullInfo == null) {
            this.methodName = NotAvailable;
        } else {
            iend = this.fullInfo.lastIndexOf('(');
            ibegin = this.fullInfo.lastIndexOf('.', iend);
            if (ibegin == -1) {
                this.methodName = NotAvailable;
            } else {
                this.methodName = this.fullInfo.substring(ibegin + 1, iend);
            }
        }

    }

    public String getClassName() {
        return this.fullyQualifiedClassName;
    }

    public String getFileName() {
        return this.fileName;
    }

    public String getLineNumber() {
        return this.lineNumber;
    }

    public String getMethodName() {
        return this.methodName;
    }

    public String getFullInfo() {
        return this.fullInfo;
    }

    private static final String fqnClassName = LocationInfo.class.getName();

    public static LocationInfo getInstance() {
        LocationInfo locationInfo = new LocationInfo(new Throwable(), fqnClassName);
        return locationInfo;
    }

}
