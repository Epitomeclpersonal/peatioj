package org.peatio.common;

import org.apache.commons.codec.binary.Base64;

import java.nio.charset.Charset;

public class StringUtil {
    public static String capitalize(String name) {
        if (name == null || name.length() == 0) {
            return name;
        }
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    public static String decapitalize(String name) {
        if (name == null || name.length() == 0) {
            return name;
        }
        return name.substring(0, 1).toLowerCase() + name.substring(1);
    }

    public static String toCamelNoation(int startIdx, String table_name) {
        String table_camel_name = "";

        String[] name_part = table_name.split("_");
        for (int i = startIdx; i < name_part.length; i++) {
            char[] char_part = name_part[i].toCharArray();
            for (int j = 0; j < char_part.length; j++) {
                char sChar = char_part[j];
                if (j == 0) {
                    sChar = Character.toUpperCase(sChar);
                }
                table_camel_name += sChar;
            }
        }

        return table_camel_name;
    }

    public static String toUnderscoreNoation(String table_name) {
        String table_unserscore_name = decapitalize(table_name).replaceAll("(\\p{javaUpperCase})", "_$1").toLowerCase();

        return table_unserscore_name;
    }

    public static String getBaseClassName(String classname) {
        String baseClassName = classname;
        int idx = classname.indexOf("$");
        if (idx != -1) {
            baseClassName = classname.substring(0, classname.indexOf("$"));
        }
        return baseClassName;
    }

    // http://www.docjar.com/html/api/com/sun/tools/javadoc/JavadocTool.java.html

    /**
     * Are surrogates supported?
     */
    static final boolean surrogatesSupported = surrogatesSupported();

    private static boolean surrogatesSupported() {
        try {
            boolean b = Character.isHighSurrogate('a');
            return true;
        } catch (NoSuchMethodError ex) {
            return false;
        }
    }

    /**
     * Return true if given file name is a valid class name (including "package-info").
     *
     * @param clazzname the name of the class to check.
     * @return true if given class name is a valid class name and false otherwise.
     */
    public static boolean isValidClassName(String s) {
        if (s.length() < 1)
            return false;
        if (s.equals("package-info"))
            return true;
        if (surrogatesSupported) {
            int cp = s.codePointAt(0);
            if (!Character.isJavaIdentifierStart(cp))
                return false;
            for (int j = Character.charCount(cp); j < s.length(); j += Character.charCount(cp)) {
                cp = s.codePointAt(j);
                if (!Character.isJavaIdentifierPart(cp))
                    return false;
            }
        } else {
            if (!Character.isJavaIdentifierStart(s.charAt(0)))
                return false;
            for (int j = 1; j < s.length(); j++)
                if (!Character.isJavaIdentifierPart(s.charAt(j)))
                    return false;
        }
        return true;
    }

    public static boolean isNotNull(String s) {
        if (s == null || s.length() == 0)
            return false;
        return true;
    }

    public static String encodeBase64(String plainString) {
        return Base64.encodeBase64String(plainString.getBytes());
    }

    public static String decodeBase64(String base64String) {
        return new String(Base64.decodeBase64(base64String), Charset.defaultCharset());
    }

}
