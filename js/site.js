/* ROI Technologies — shared site behavior: header menu toggle */
(function () {
  var btn  = document.getElementById('menu-toggle');
  var menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  function open() {
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
  }
  function close() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  }
  function toggle() {
    menu.classList.contains('open') ? close() : open();
  }

  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
  // close after choosing a destination
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
  // close on outside click
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) close();
  });
  // close on Escape
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
