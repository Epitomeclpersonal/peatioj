<!DOCTYPE html>
<html lang="en">
<head>
    <link href="/favicon.ico" rel="shortcut icon"/>
<#--include_gon-->
    <link href="/assets/market.css?body=1" media="all" rel="stylesheet"/>
<#--javascript_include_tag "market"-->
<#--javascript_include_tag "locales/#{I18n.locale}"-->
    <#include "../../shared/html5.ftl">
    <#include "../../shared/meta.ftl">
${csrf_meta_tags}
</head>

<body id="#{body_id}" data-lang="#{locale_name}">
<audio preload="preload" id="success-fx">
    <source src="/sounds/success.mp3"></source>
</audio>

<audio preload="preload" id="warning-fx">
    <source src="/sounds/warning.mp3"></source>
</audio>

<#include "_header.ftl">
<div id="wrap">
    <div class="content">
        <#include "_market_trades.ftl">
        <#include "_market_list.ftl">

        <#include "_candlestick.ftl">
        <#include "_range_switch.ftl">
        <#include "_indicator_switch.ftl">

    <#--- if ENV['CHAT_FEATURE']-->
    <#--#chat_tabs_wrapper.float-->
    <#--ul.nav.nav-tabs.tabs-right.sideways-->
    <#--li: a href='#chat_content' data-toggle='tab' = t('.chat')-->
    <#--.tab-content-->
    <#--#chat_content.tab-pane-->
        <#include "_chat.ftl">

        <#include "_order_book.ftl">
        <#include "_depths.ftl">
        <#include "_ticker.ftl">
        <#include "_ask_entry.ftl">
    <#--, locals: {market: @market, order: @order_ask }-->
        <#include "_bid_entry.ftl">
    <#--, locals: {market: @market, order: @order_bid }-->
        <#include "_my_orders.ftl">
    </div>
</div>
</body>
</html>