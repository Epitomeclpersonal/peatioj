<div class="has-left-dropdown" id="my_orders_wrapper">
    <div class="dropdown-wrapper">
        <ul class="dropdown-menu">
            <li>
                <a data-confirm="t('.confirm_clear_bids')"
                    data-method="post"
                    data-remote="true"
                    href="clear_market_order_bids_path(market_id: current_market.id)" >
                    t('.clear_bids_html')
                </a>
            </li>
            <li>
                <a  data-confirm="t('.confirm_clear_asks')"
                    data-method="post"
                    data-remote="true"
                    href="clear_market_order_asks_path(market_id: current_market.id)" >
                    t('.clear_asks_html')
                </a>
            </li>
            <li>
                <a data-confirm="t('.confirm_clear_all')"
                    data-method="post"
                    data-remote="true"
                    href="clear_market_orders_path(market_id: current_market.id)" >
                    t('.clear_all_html')
                </a>
            </li>
        </ul>
    </div>
    <div class="panel panel-default" id="my_orders">
        <div class="panel-body panel-body-content">
            <div class="empty-row">t('.no_open_orders')</div>
            <table class="table table-hover">
                <tbody>
                    <#include "_mask.ftl">
                </tbody>
            </table>
        </div>
    </div>
</div>