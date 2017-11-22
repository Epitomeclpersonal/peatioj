/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.sfx_warning = () => window.sfx('warning');

window.sfx_success = () => window.sfx('success');

window.sfx = function(kind) {
  const s = $(`#${kind}-fx`)[0];
  if (Cookies.get('sound') === 'false') { return; }
  if (!s.play) { return; }
  s.pause();
  s.currentTime = 0;
  return s.play();
};
