<div id="bid_entry" class="panel panel-default entry-right">
    <div class="panel-body">
    <#--id="new_order_bid" accept-charset="UTF-8" action="/markets/btccny/order_bids" class="new_order_bid"-->
        <form ${form_for [market, order]} data-remote="true" method="post">
            <div style="margin:0;padding:0;display:inline">
                <input name="utf8" type="hidden" value="&#x2713;"/>
            </div>
            <input type="hidden" id="order_bid_ord_type" name="order_bid[ord_type]" value="limit"/>
            <div class="input-group price">
                <label class="input-group-addon">t('.price')</label>
                <span class="label label-danger hint-price-disadvantage"></span>
                <input type="text" id="order_bid_price" name="order_bid[price]" class="form-control"/>
                <span class="input-group-addon">t(market.bid['currency'], scope: 'market.currency')</span>
            </div>
            <div class="input-group amount">
                <label class="input-group-addon">t('.amount')</label>
                <input type="text" id="order_bid_origin_volume" name="order_bid[origin_volume]" class="form-control"/>
                <span class="input-group-addon">t(market.ask['currency'], scope: 'market.currency')</span>
            </div>
            <div class="input-group total">
                <label class="input-group-addon">t('.total')</label>
                <span class="label label-info hint-positions"></span>
                <input type="text" id="order_bid_total" name="order_bid[total]" class="form-control"/>
                <span class="input-group-addon">t(market.bid['currency'], scope: 'market.currency')</span>
            </div>
            <#include "_balance.ftl", "locals: {currency: t(market.bid['currency'], scope: 'market.currency')}" >

            <button class="btn btn-danger btn-block text-up" type="submit">t('.action', currency:
                t(market.ask['currency'], scope: 'market.currency'))
            </button>
        </form>
    </div>
    <#include "_mask.ftl">
</div>
