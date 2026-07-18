(function () {
  var countEl = document.getElementById('followerCount');
  if (countEl) {
    var target = 565;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      countEl.textContent = Math.round(eased * target) + 'K';
      if (progress < 1) requestAnimationFrame(step);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      countEl.textContent = target + 'K';
    } else {
      requestAnimationFrame(step);
    }
  }

  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }
})();
