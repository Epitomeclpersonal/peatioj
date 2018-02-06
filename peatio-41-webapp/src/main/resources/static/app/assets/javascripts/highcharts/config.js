/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
Highcharts.setOptions({
  global: {
    useUTC: false
  }
});

if (gon.local === "zh-CN") {
  Highcharts.setOptions({
    lang: {
      months: ['一月', '二月', '三月', '四月', '五月', '六月',  '七月', '八月', '九月', '十月', '十一月', '十二月'],
      shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月',  '七月', '八月', '九月', '十月', '十一月', '十二月'],
      weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }});
}

const { render } = Highcharts.RangeSelector.prototype;

Highcharts.RangeSelector.prototype.render = function(min, max) {
    render.apply(this, [min, max]);
    let leftPosition = this.chart.plotLeft;
    const topPosition = this.chart.plotTop;
    const space = 10;

    this.zoomText.attr({
      x: leftPosition + 2,
      y: topPosition + 15,
      text: gon.i18n.chart.zoom
    });

    leftPosition += this.zoomText.getBBox().width + 15;

    return (() => {
      const result = [];
      for (let button of Array.from(this.buttons)) {
        button.attr({
          x: leftPosition,
          y: topPosition
        }); 
        result.push(leftPosition += button.width + space);
      }
      return result;
    })();
  };

const f = function(callback) {  };
Highcharts.wrap(Highcharts.Tooltip.prototype, 'hide', f);
