<li id="language" class="dropdown">
    <a class="dropdown-toggle" href="#" data-toggle="dropdown">
        <img class="lang-icon" src="#{language_path}">
        <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
        <#list I18n.available_locales  as  lang>
            <a href="?lang=#{lang}">
                <img class="lang-icon" src="/languages/#{lang || I18n.locale}.png">
            </a>
        </#list>
    </ul>
</li>
