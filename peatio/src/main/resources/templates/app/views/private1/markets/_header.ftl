<header class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container-fluid">
        <ul id="menu" class="nav navbar-nav navbar-left">
            <a class="navbar-brand" href="${root_path}">PEATIO&nbsp; @market.name</a>
            <p class="navbar-text">
                <span data-title="#{t('.vol')}">
                    <span class="vol"></span>
                </span>
                <span data-title="#{t('.high')}">
                    <span class="low"></span>
                </span>
                <span data-title="#{t('.low')}">
                    <span class="low"></span>
                </span>
                <span data-title="#{t('.change')}">
                    <span class="low"></span>
                </span>
            </p>
        </ul>

        <ul class="nav navbar-nav navbar-right">
            <#if "${current_user}">
                <#include "_account_summary.ftl">
                <#include "_settings.ftl">
            <#else>
                <p class="navbar-text">
                    <#include "_language.ftl">
                </p>
            </#if>
        </ul>
    </div>
</header>