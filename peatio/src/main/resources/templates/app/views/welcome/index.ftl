<header class="text-center">
    <div class="ribbon">
        <a href="https://github.com/peatio/peatio">View on GitHub</a>
    </div>
    <div class="container">
        <a href="http://github.com/peatio/peatio">
            <img src="${image_path}/logo.png" width="336px"/>
        </a>
        <section>
        <#list available_locales as locale >
            <h3>t(:slogan, locale: locale)</h3>
        </#list>
        </section>
        <div id="getstart" class="row">
        <#if current_user != true>
            <div class="col-xs-4 col-xs-offset-8">
                <a href="${signin_path}" class="btn btn-primary btn-lg btn-block" role="button">t("header.signin")</a>
            </div>
            <div class="col-xs-4">
                <a href="${signup_path}" class="btn btn-primary btn-lg btn-block" role="button">t("header.signup")</a>
            </div>
        <#else>
            <div class="col-xs-6.col-xs-offset-9.text-center">
                <a href="${market_path(current_market)}" class="btn btn-primary btn-lg btn-block" role="button">
                    t("header.getstart")</a>
                <a href="${funds_path}" class="btn btn-primary btn-lg btn-block" role="button">t("header.funds")</a>
                <a href="${settings_path}" class="btn btn-primary btn-lg btn-block" role="button">
                    t("header.settings")</a>
            </div>
        </#if>
        </div>
    </div>
</header>
