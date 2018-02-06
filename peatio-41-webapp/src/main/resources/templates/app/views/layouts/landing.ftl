<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="shortcut icon" href="/favicon.ico"/>
  <#--= include_gon-->
  <link href="/assets/application.css?body=1" media="all" rel="stylesheet"/>
  <#--= javascript_include_tag "application"-->
  <#--= javascript_include_tag "locales/#{I18n.locale}"-->
<#include "../shared/html5.ftl">
<#include "../shared/meta.ftl">
  ${csrf_meta_tags}
</head>
<body id="${body_id}" data-lang="${locale_name}">
<div id="wrap">
<#include "../shared/alert.ftl">
  <#include "${yield}">
  <div id="push"></div>
</div>
<#include "../shared/footer.ftl">
</body>
</html>
