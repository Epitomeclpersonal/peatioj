<#if !current_user?exists>
    <div class="mask">
        <p class="text-center>
            "#{t('.warning')}"
        </p>
    </div>
</#if>