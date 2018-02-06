/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
$(window).load(function() {

  // clipboard
  $.subscribe('deposit_address:create', (event, data) =>
    $('[data-clipboard-text], [data-clipboard-target]').each(function() {
      const zero = new ZeroClipboard($(this), {forceHandCursor: true});

      zero.on('complete', () =>
        $(zero.htmlBridge)
          .attr('title', gon.clipboard.done)
          .tooltip('fixTitle')
          .tooltip('show')
      );
      zero.on('mouseout', () =>
        $(zero.htmlBridge)
          .attr('title', gon.clipboard.click)
          .tooltip('fixTitle')
      );

      const placement = $(this).data('placement') || 'bottom';
      return $(zero.htmlBridge).tooltip({title: gon.clipboard.click, placement});
    })
  );

  // qrcode
  $.subscribe('deposit_address:create', function(event, data) {
    const code = data ? data : $('#deposit_address').html();

    $("#qrcode").attr('data-text', code);
    $("#qrcode").attr('title', code);
    return $('.qrcode-container').each(function(index, el) {
      const $el = $(el);
      $("#qrcode img").remove();
      $("#qrcode canvas").remove();

      return new QRCode(el, {
        text:   $("#qrcode").attr('data-text'),
        width:  $el.data('width'),
        height: $el.data('height')
      }
      );
    });
  });

  $.publish('deposit_address:create');

  // flash message
  $.subscribe('flash', function(event, data) {
    $('.flash-messages').show();
    $('#flash-content').html(data.message);
    return setTimeout(() => $('.flash-messages').hide(1000)
    , 10000);
  });

  // init the two factor auth
  $.subscribe('two_factor_init', (event, data) => TwoFactorAuth.attachTo('.two-factor-auth-container'));

  return $.publish('two_factor_init');
});
