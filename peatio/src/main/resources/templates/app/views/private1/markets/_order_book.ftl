<div class="panel panel-default" id="order_book">
    <div class="panel-body panel-body-head">
        <div class="row" id="order_book_header">
            <div class="col-xs-12 col-left">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="amount text-right col-xs-10">t('.amount')</th>
                            <th class="volume text-right col-xs-7"> t('.volume')</th>
                            <th class="price text-right col-xs-7">t('.bid')</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="col-xs-12">
                <table class="table table-head">
                    <thead>
                        <tr>
                            <th class="price text-right col-xs-7">t('.ask')</th>
                            <th class="volume text-right col-xs-7">t('.volume')</th>
                            <th class="amount text-right col-xs-10">t('.amount')</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    <div class="panel-body panel-body-content">
        <div class="row" id="order_book_body">
            <div class="col-xs-12 col-left">
                <table class="table table-hover bids"></table>
            </div>
            <div class="col-xs-12">
                <table class="table table-hover asks"></table>
            </div>
        </div>
    </div>
</div>
