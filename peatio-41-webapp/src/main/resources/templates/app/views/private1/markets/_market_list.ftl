<div class="has-right-dropdown" id="market_list_wrapper">
    <#if @market_groups.size > 1 >
        <div class="dropdown-wrapper">
            <ul class="dropdown-menu">
                <li>
                    <a class="active" data-name="all" href="javascript:;">
                        t('.all_html')
                    </a>
                </li>
                <#list @market_groups as name>
                    <a data-name=name href="javascript:;">
                        t(".#{name}_html")
                    </a>
                </#list>
            </ul>
        </div>
    </#if>
    <div id="market_list">
        <div class="panel panel-default">
            <div class="panel-body panel-body-head">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="col-xs-7">
                                <span class="name">
                                    t('.all')
                                </span>
                            </th>
                            <th class="col-xs-4 text-right price">
                                t('.price')
                            </th>
                            <th class="col-xs-5 text-right change">
                                t('.change')
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="panel-body panel-body-content">
                <table class="table table-hover markets all">
                    <tbody>
                        <#list @markets as market>
                            <tr class="market quote-#{market.quote_unit}" data-market=market.id id="market-list-#{market.id}">
                                <td class="col-xs-4 name">
                                    <a href="market_path(market)">market.name</a>
                                </td>
                                <td class="col-xs-15 price">Global[market.id].ticker[:last]</td>
                                <td class="col-xs-5 change">+0.00%</td>
                            </tr>
                        </#list>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
