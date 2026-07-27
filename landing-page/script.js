/* ============================================================
   LANDING PAGE BEHAVIOR
   ============================================================ */
(function(){
  const METRIC_KEYS = {
    visits: "handshake_landing_visits",
    ctaClicks: "handshake_landing_cta_clicks",
  };

  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navbar = document.querySelector('.navbar');
  const navbarInner = document.querySelector('.navbar-inner');
  const ctaLinks = Array.from(document.querySelectorAll('.hero-actions a, #cta a, .nav-actions a[href*="work/index.html"]'));

  function readMetric(key){
    const raw = localStorage.getItem(key);
    const value = Number(raw);
    return Number.isFinite(value) ? value : 0;
  }

  function writeMetric(key, value){
    localStorage.setItem(key, String(value));
  }

  function incrementMetric(key){
    const next = readMetric(key) + 1;
    writeMetric(key, next);
    return next;
  }

  function trackVisit(){
    incrementMetric(METRIC_KEYS.visits);
  }

  function trackCtaClick(){
    incrementMetric(METRIC_KEYS.ctaClicks);
  }

  function setActiveLink(id){
    navLinks.forEach(link => {
      const target = link.getAttribute('href').slice(1);
      link.classList.toggle('active', target === id);
    });
  }

  function getNavOffset(){
    if(!navbarInner) return 0;
    return navbarInner.getBoundingClientRect().height + 20;
  }

  function scrollToSection(targetId){
    const el = document.getElementById(targetId);
    if(!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - getNavOffset();
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function bindSmoothScroll(){
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const href = link.getAttribute('href') || '';
        if(!href.startsWith('#')) return;
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if(!target) return;
        event.preventDefault();
        scrollToSection(targetId);
      });
    });

    ctaLinks.forEach(link => {
      link.addEventListener('click', () => {
        trackCtaClick();
      });
    });
  }

  function bindScrollSpy(){
    if(!sections.length) return;

    if('IntersectionObserver' in window){
      const observer = new IntersectionObserver(entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if(visible && visible.target && visible.target.id){
          setActiveLink(visible.target.id);
        }
      }, {
        root: null,
        threshold: [0.25, 0.4, 0.55],
        rootMargin: `-${getNavOffset()}px 0px -50% 0px`,
      });

      sections.forEach(section => observer.observe(section));
      return;
    }

    const updateActiveOnScroll = () => {
      const offset = getNavOffset();
      let activeId = sections[0].id;

      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top - offset <= 80){
          activeId = section.id;
        }
      });

      setActiveLink(activeId);
    };

    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();
  }

  function bindStickyState(){
    if(!navbar) return;

    const updateState = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 12);
    };

    window.addEventListener('scroll', updateState, { passive: true });
    updateState();
  }

  function bindRevealAnimations(){
    const revealItems = Array.from(document.querySelectorAll('.role-card, .feature-card, .card, .section-head'));
    if(!revealItems.length) return;

    revealItems.forEach(item => item.classList.add('reveal-ready'));

    if(!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    });

    revealItems.forEach(item => observer.observe(item));
  }

  function bindMobileNavFallback(){
    if(navLinks.length > 0) return;
    const nav = document.querySelector('.nav-links');
    if(!nav) return;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'btn btn-secondary btn-sm';
    toggle.textContent = 'Menu';
    toggle.setAttribute('aria-label', 'Toggle navigation');

    const actions = document.querySelector('.nav-actions');
    if(actions){
      actions.prepend(toggle);
    }

    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
  }

  function init(){
    trackVisit();
    bindSmoothScroll();
    bindScrollSpy();
    bindStickyState();
    bindRevealAnimations();
    bindMobileNavFallback();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
