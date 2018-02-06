<#if browser_modern != true >
<div class="alert alert-danger alert-dismissible" role="alert">
    <div class="container">
        <button class="close" type="button" data-dismiss="alert">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
        </button>
        <span class="text-important"> == t('.modern')</span>
    </div>
</div>
</#if>

<div class="alert alert-danger alert-dismissable pusher-unavailable hide" role="alert">
    <div class="container">
        <button class="close" type="button" data-dismiss="alert">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
        </button>
        <span class="text-important">== t('.pusher_unavailable')</span>
    </div>
</div>
