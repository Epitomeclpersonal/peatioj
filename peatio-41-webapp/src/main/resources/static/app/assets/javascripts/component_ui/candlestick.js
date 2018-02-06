/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS202: Simplify dynamic range loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let DATETIME_LABEL_FORMAT_FOR_TOOLTIP;
if (gon.local === "zh-CN") {
  DATETIME_LABEL_FORMAT_FOR_TOOLTIP = {
    millisecond: ['%m月%e日, %H:%M:%S.%L', '%m月%e日, %H:%M:%S.%L', '-%H:%M:%S.%L'],
    second:      ['%m月%e日, %H:%M:%S', '%m月%e日, %H:%M:%S', '-%H:%M:%S'],
    minute:      ['%m月%e日, %H:%M', '%m月%e日, %H:%M', '-%H:%M'],
    hour:        ['%m月%e日, %H:%M', '%m月%e日, %H:%M', '-%H:%M'],
    day:         ['%m月%e日, %H:%M', '%m月%e日, %H:%M', '-%H:%M'],
    week:        ['%Y年%m月%e日', '%Y年%m月%e日', '-%m月%e日'],
    month:       ['%Y年%m月', '%Y年%m月', '-%m'],
    year:        ['%Y', '%Y', '-%Y']
  };
}

const DATETIME_LABEL_FORMAT = {
  second: '%H:%M:%S',
  minute: '%H:%M',
  hour: '%H:%M',
  day: '%m-%d',
  week: '%m-%d',
  month: '%Y-%m',
  year: '%Y'
};

const RANGE_DEFAULT = {
  fill: 'none',
  stroke: 'none',
  'stroke-width': 0,
  r: 8,
  style: {
    color: '#333'
  },
  states: {
    hover: {
      fill: '#000',
      style: {
        color: '#ccc'
      }
    },
    select: {
      fill: '#000',
      style: {
        color: '#eee'
      }
    }
  }
};

const COLOR_ON = {
  candlestick: {
    color: '#990f0f',
    upColor: '#000000',
    lineColor: '#cc1414',
    upLineColor: '#49c043'
  },
  close: {
    color: null
  }
};

// The trick is use invalid color code to make the line transparent
const COLOR_OFF = {
  candlestick: {
    color: 'invalid',
    upColor: 'invalid',
    lineColor: 'invalid',
    upLineColor: 'invalid'
  },
  close: {
    color: 'invalid'
  }
};

const COLOR = {
  candlestick: _.extend({}, COLOR_OFF.candlestick),
  close: _.extend({}, COLOR_OFF.close)
};
const INDICATOR = {MA: false, EMA: false};

this.CandlestickUI = flight.component(function() {
  this.mask = function() {
    return this.$node.find('.mask').show();
  };

  this.unmask = function() {
    return this.$node.find('.mask').hide();
  };

  this.request = function() {
    return this.mask();
  };

  this.init = function(event, data) {
    this.running = true;
    __guard__(this.$node.find('#candlestick_chart').highcharts(), x => x.destroy());

    this.initHighStock(data);
    return this.trigger('market::candlestick::created', data);
  };

  this.switchType = function(event, data) {
    let chart;
    for (let key in COLOR) { const val = COLOR[key]; _.extend(COLOR[key], COLOR_OFF[key]); }
    _.extend(COLOR[data.x], COLOR_ON[data.x]);

    if (chart = this.$node.find('#candlestick_chart').highcharts()) {
      for (let type in COLOR) {
        const colors = COLOR[type];
        for (let s of Array.from(chart.series)) {
          if ((s.userOptions.algorithm == null) && (s.userOptions.id === type)) {
            s.update(colors, false);
          }
        }
      }
      return this.trigger("switch::main_indicator_switch::init");
    }
  };

  this.switchMainIndicator = function(event, data) {
    let chart;
    for (let key in INDICATOR) { const val = INDICATOR[key]; INDICATOR[key] = false; }
    INDICATOR[data.x] = true;

    if (chart = this.$node.find('#candlestick_chart').highcharts()) {
      // reset all series depend on close
      for (var s of Array.from(chart.series)) {
        if (s.userOptions.linkedTo === 'close') {
          s.setVisible(true, false);
        }
      }

      for (let indicator in INDICATOR) {
        const visible = INDICATOR[indicator];
        for (s of Array.from(chart.series)) {
          if ((s.userOptions.algorithm != null) && (s.userOptions.algorithm === indicator)) {
            s.setVisible(visible, false);
          }
        }
      }
      return chart.redraw();
    }
  };

  this.default_range = unit => 1000 * 60 * unit * 100;

  this.initHighStock = function(data) {
    const component = this;
    const range = this.default_range(data['minutes']);
    const unit = $(`[data-unit=${data['minutes']}]`).text();
    let title = `${gon.market.base_unit.toUpperCase()}/${gon.market.quote_unit.toUpperCase()} - ${unit}`;

    const timeUnits = {
      millisecond: 1,
      second: 1000,
      minute: 60000,
      hour: 3600000,
      day: 24 * 3600000,
      week: 7 * 24 * 3600000,
      month: 31 * 24 * 3600000,
      year: 31556952000
    };

    const dataGrouping =
      {enabled: false};

    const tooltipTemplate = JST["templates/tooltip"];

    if (DATETIME_LABEL_FORMAT_FOR_TOOLTIP) {
        dataGrouping['dateTimeLabelFormats'] = DATETIME_LABEL_FORMAT_FOR_TOOLTIP;
      }

    return this.$node.find('#candlestick_chart').highcharts("StockChart", {
      chart: {
        events: {
          load: () => {
            return this.unmask();
          }
        },
        animation: true,
        marginTop: 95,
        backgroundColor: 'rgba(0,0,0, 0.0)'
      },

      credits: {
        enabled: false
      },

      tooltip: {
        crosshairs: [{
            width: 0.5,
            dashStyle: 'solid',
            color: '#777'
        }, false],
        valueDecimals: gon.market.bid.fixed,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 2,
        shadow: false,
        shared: true,
        positioner(w, h, point) {
          const chart_w = $(this.chart.renderTo).width();
          const chart_h = $(this.chart.renderTo).height();
          const grid_h  = Math.min(20, Math.ceil(chart_h/10));
          const x = Math.max(10, point.plotX-w-20);
          const y = Math.max(0, (Math.floor(point.plotY/grid_h)*grid_h)-20);
          return {x, y};
        },
        useHTML: true,
        formatter() {
          const { chart }  = this.points[0].series;
          const { series } = this.points[0];
          const { index }  = this.points[0].point;
          const { key }    = this.points[0];

          for (let k in timeUnits) {
            const v = timeUnits[k];
            if ((v >= series.xAxis.closestPointRange) || ((v <= timeUnits.day) && ((key % v) > 0))) {
              var dateTimeLabelFormats;
              const dateFormat = (dateTimeLabelFormats = series.options.dataGrouping.dateTimeLabelFormats[k][0]);
              title = Highcharts.dateFormat(dateFormat, key);
              break;
            }
          }

          const fun = function(h, s) {
            h[s.options.id] = s.data[index];
            return h;
          };
          return tooltipTemplate({
            title,
            indicator: INDICATOR,
            format(v, fixed) { if (fixed == null) { fixed = 3; } return Highcharts.numberFormat(v, fixed); },
            points: _.reduce(chart.series, fun, {})});
        }
      },

      plotOptions: {
        candlestick: {
          turboThreshold: 0,
          followPointer: true,
          color: '#990f0f',
          upColor: '#000000',
          lineColor: '#cc1414',
          upLineColor: '#49c043',
          dataGrouping
        },
        column: {
          turboThreshold: 0,
          dataGrouping
        },
        trendline: {
          lineWidth: 1
        },
        histogram: {
          lineWidth: 1,
          tooltip: {
            pointFormat:
              `\
<li><span style='color: {series.color};'>{series.name}: <b>{point.y}</b></span></li>\
`
          }
        }
      },

      scrollbar: {
        buttonArrowColor: '#333',
        barBackgroundColor: '#202020',
        buttonBackgroundColor: '#202020',
        trackBackgroundColor: '#202020',
        barBorderColor: '#2a2a2a',
        buttonBorderColor: '#2a2a2a',
        trackBorderColor: '#2a2a2a'
      },

      rangeSelector: {
        enabled: false
      },

      navigator: {
        maskFill: 'rgba(32, 32, 32, 0.6)',
        outlineColor: '#333',
        outlineWidth: 1,
        xAxis: {
          dateTimeLabelFormats: DATETIME_LABEL_FORMAT
        }
      },

      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: DATETIME_LABEL_FORMAT,
        lineColor: '#333',
        tickColor: '#333',
        tickWidth: 2,
        range,
        events: {
          afterSetExtremes(e) {
            if ((e.trigger === 'navigator') && (e.triggerOp === 'navigator-drag')) {
              if (component.liveRange(this.chart) && !component.running) {
                return component.trigger("switch::range_switch::init");
              }
            }
          }
        }
      },

      yAxis: [
        {
          labels: {
            enabled: true,
            align: 'right',
            x: 2,
            y: 3,
            zIndex: -7
          },
          gridLineColor: '#222',
          gridLineDashStyle: 'ShortDot',
          top: "0%",
          height: "70%",
          lineColor: '#fff',
          minRange: gon.ticker.last ? parseFloat(gon.ticker.last)/25 : null
        },
        {
          labels: {
            enabled: false
          },
          top: "70%",
          gridLineColor: '#000',
          height: "15%"
        },
        {
          labels: {
            enabled: false
          },
          top: "85%",
          gridLineColor: '#000',
          height: "15%"
        }
      ],

      series: [
        _.extend({
          id: 'candlestick',
          name: gon.i18n.chart.candlestick,
          type: "candlestick",
          data: data['candlestick'],
          showInLegend: false
        }, COLOR['candlestick']),
        _.extend({
          id: 'close',
          type: 'spline',
          data: data['close'],
          showInLegend: false,
          marker: {
            radius: 0
          }
        }, COLOR['close']),
        {
          id: 'volume',
          name: gon.i18n.chart.volume,
          yAxis: 1,
          type: "column",
          data: data['volume'],
          color: '#777',
          showInLegend: false
        },
        {
          id: 'ma5',
          name: 'MA5',
          linkedTo: 'close',
          showInLegend: true,
          type: 'trendline',
          algorithm: 'MA',
          periods: 5,
          color: '#7c9aaa',
          visible: INDICATOR['MA'],
          marker: {
            radius: 0
          }
        },
        {
          id: 'ma10',
          name: 'MA10',
          linkedTo: 'close',
          showInLegend: true,
          type: 'trendline',
          algorithm: 'MA',
          periods: 10,
          color: '#be8f53',
          visible: INDICATOR['MA'],
          marker: {
            radius: 0
          }
        },
        {
          id: 'ema7',
          name: 'EMA7',
          linkedTo: 'close',
          showInLegend: true,
          type: 'trendline',
          algorithm: 'EMA',
          periods: 7,
          color: '#7c9aaa',
          visible: INDICATOR['EMA'],
          marker: {
            radius: 0
          }
        },
        {
          id: 'ema30',
          name: 'EMA30',
          linkedTo: 'close',
          showInLegend: true,
          type: 'trendline',
          algorithm: 'EMA',
          periods: 30,
          color: '#be8f53',
          visible: INDICATOR['EMA'],
          marker: {
            radius: 0
          }
        },
        {
          id: 'macd',
          name : 'MACD',
          linkedTo: 'close',
          yAxis: 2,
          showInLegend: true,
          type: 'trendline',
          algorithm: 'MACD',
          color: '#7c9aaa',
          marker: {
            radius: 0
          }
        },
        {
          id: 'sig',
          name : 'SIG',
          linkedTo: 'close',
          yAxis: 2,
          showInLegend: true,
          type: 'trendline',
          algorithm: 'signalLine',
          color: '#be8f53',
          marker: {
            radius: 0
          }
        },
        {
          id: 'hist',
          name: 'HIST',
          linkedTo: 'close',
          yAxis: 2,
          showInLegend: true,
          type: 'histogram',
          color: '#990f0f'
        }
      ]
    });
  };

  this.formatPointArray = point => ({x: point[0], open: point[1], high: point[2], low: point[3], close: point[4]});

  this.createPointOnSeries = (chart, i, px, point) => chart.series[i].addPoint(point, true, true);
    //last = chart.series[i].points[chart.series[i].points.length-1]
    //console.log "Add point on #{i}: px=#{px} lastx=#{last.x}"

  this.createPoint = function(chart, data, i) {
    this.createPointOnSeries(chart, 0, data.candlestick[i][0], data.candlestick[i]);
    this.createPointOnSeries(chart, 1, data.close[i][0], data.close[i]);
    this.createPointOnSeries(chart, 2, data.volume[i].x, data.volume[i]);
    return chart.redraw(true);
  };

  this.updatePointOnSeries = function(chart, i, px, point) {
    if (chart.series[i].points) {
      const last = chart.series[i].points[chart.series[i].points.length-1];
      if (px === last.x) {
        return last.update(point, false);
      } else {
        return console.log(`Error update on series ${i}: px=${px} lastx=${last.x}`);
      }
    }
  };

  this.updatePoint = function(chart, data, i) {
    this.updatePointOnSeries(chart, 0, data.candlestick[i][0], this.formatPointArray(data.candlestick[i]));
    this.updatePointOnSeries(chart, 1, data.close[i][0], data.close[i][1]);
    this.updatePointOnSeries(chart, 2, data.volume[i].x, data.volume[i]);
    return chart.redraw(true);
  };

  this.process = function(chart, data) {
    return (() => {
      const result = [];
      for (let i = 0, end = data.candlestick.length-1, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
        const current = chart.series[0].points.length - 1;
        const current_point = chart.series[0].points[current];

        if (data.candlestick[i][0] > current_point.x) {
          result.push(this.createPoint(chart, data, i));
        } else {
          result.push(this.updatePoint(chart, data, i));
        }
      }
      return result;
    })();
  };

  this.updateByTrades = function(event, data) {
    const chart = this.$node.find('#candlestick_chart').highcharts();

    if (this.liveRange(chart)) {
      return this.process(chart, data);
    } else {
      return this.running = false;
    }
  };

  this.liveRange = function(chart) {
    const p1 = chart.series[0].points[ chart.series[0].points.length-1 ].x;
    const p2 = chart.series[10].points[ chart.series[10].points.length-1 ].x;
    return p1 === p2;
  };

  return this.after('initialize', function() {
    this.on(document, 'market::candlestick::request', this.request);
    this.on(document, 'market::candlestick::response', this.init);
    this.on(document, 'market::candlestick::trades', this.updateByTrades);
    this.on(document, 'switch::main_indicator_switch', this.switchMainIndicator);
    return this.on(document, 'switch::type_switch', this.switchType);
  });
});

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}