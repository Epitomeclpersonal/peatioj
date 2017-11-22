/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
$(function() {
  $('input[name*=created_at]').datetimepicker();

  return $('[data-clipboard-text], [data-clipboard-target]').each(function() {
    const zero = new ZeroClipboard($(this));

    zero.on('complete', () =>
      $(zero.htmlBridge)
        .attr('title', 'done')
        .tooltip('fixTitle')
        .tooltip('show')
    );
    zero.on('mouseout', () =>
      $(zero.htmlBridge)
        .attr('title', 'copy')
        .tooltip('fixTitle')
    );

    const placement = $(this).data('placement') || 'bottom';
    return $(zero.htmlBridge).tooltip({title: 'copy', placement});
  });
});
