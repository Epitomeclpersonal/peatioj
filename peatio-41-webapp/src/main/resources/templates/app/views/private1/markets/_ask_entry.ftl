<div id="ask_entry" class="panel panel-default entry-left">
    <div class="panel-body">
        <#--accept-charset="UTF-8" action="/markets/btccny/order_asks" class="new_order_ask"-->
        <#--id="new_order_ask"-->
        <form ${form_for [market, order]} data-remote="true" method="post">
            <div style="margin:0;padding:0;display:inline">
                <input type="hidden" name="utf8" value="&#x2713;"/>
            </div>
            <input type="hidden" id="order_ask_ord_type" name="order_ask[ord_type]" value="limit"/>
            <div class="input-group price">
                <label class="input-group-addon">t('.price')</label>
                <span class="label label-danger hint-price-disadvantage"></span>
                <input type="text" id="order_ask_price" name="order_ask[price]" class="form-control"/>
                <span class="input-group-addon">t(market.bid['currency'], scope: 'market.currency')</span>
            </div>
            <div class="input-group amount">
                <label class="input-group-addon">t('.amount')</label>
                <span class="label label-info hint-positions"></span>
                <input type="text" id="order_ask_origin_volume" name="order_ask[origin_volume]" class="form-control"/>
                <span class="input-group-addon">t(market.ask['currency'], scope: 'market.currency')</span>
            </div>
            <div class="input-group total">
                <label class="input-group-addon">t('.total')</label>
                <input type="text" id="order_ask_total" name="order_ask[total]" class="form-control"/>
                <span class="input-group-addon">t(market.bid['currency'], scope: 'market.currency')</span>
            </div>
            <#include "_balance.ftl", "locals: {currency: t(market.ask['currency'], scope: 'market.currency')}" >

            <button class="btn btn-danger btn-block text-down" type="submit">t('.action', currency:
                t(market.ask['currency'], scope: 'market.currency'))
            </button>
        </form>
    </div>
    <#include "_mask.ftl">
</div>
