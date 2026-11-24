/* =========================================================
   Preetideepa Mishra · Portfolio
   Plain JavaScript, no libraries, works as-is on GitHub Pages.
   ========================================================= */

/* ---------- Case study content ----------
   To edit a case study, change the text below. Images live in assets/img/. */
var CASES = {
  locallore: {
    tags: ['UX case study', 'Mobile app', 'Research'],
    title: 'Locallore',
    lede: 'Helping tourists find and trust a local insider, one small step at a time.',
    meta: [
      ['Context', 'Minor design project'],
      ['Discipline', 'UX research, UX/UI design'],
      ['Deliverables', 'Research, personas, flows, 26 screens, design system']
    ],
    cover: 'assets/img/locallore-cover.jpg',
    blocks: [
      { h: 'The problem', p: [
        'Travellers want experiences that feel local, but review sites keep sending them to the same crowded places. Locals could close that gap, yet a stranger offering to show you their city raises one hard question: who can I trust?',
        'Most competitors treat trust as back-end vetting, with background checks and star ratings. Few help a traveller see why this particular local fits them.'
      ]},
      { h: 'Design challenge', quote: 'How might we help tourists find and trust a local insider who fits their interests, budget, time and comfort, and let that trust grow step by step?' },
      { h: 'The idea', p: [
        'Locallore is a mobile app that matches a traveller to a local on interests, budget, time and comfort level, then builds trust in small steps before, during and after the meeting, without making locals feel they are performing their culture for money.'
      ]},
      { h: 'Onboarding & matching', img: 'assets/img/locallore-onboarding.jpg', cap: 'Welcome → verify phone → interests → budget & time → comfort level' },
      { h: 'Discover & decide', img: 'assets/img/locallore-discover.jpg', cap: 'Matches, filters, local profile, intro video and the trust ladder' },
      { h: 'Plan & book', img: 'assets/img/locallore-plan.jpg', cap: 'Chat, plan the day, review, payment, request sent' },
      { h: 'Meeting day', img: 'assets/img/locallore-meeting.jpg', cap: 'Trips, live meeting view, safety check-in, safety circle, review' },
      { h: 'What came out of it', stats: [
        ['3', 'personas, 2 empathy maps and a journey map'],
        ['9 + 5', 'task flows, a site map and a content hierarchy'],
        ['26', 'high-fidelity screens, traveller and host side'],
        ['11', 'design system pages with live components']
      ]},
      { h: 'What I learned', list: [
        ['Trust is a ladder, not a badge.', 'Survey answers put ID verification first and video intros last, so the app asks for identity early and offers the video as optional.'],
        ['Design for both sides.', 'Locals want in-app chat, fair pay and safety as much as travellers want authenticity.'],
        ['Next: test and extend.', 'Usability-test the flow with travellers and hosts, link the screens into a clickable prototype, and design host onboarding and earnings.']
      ]}
    ]
  },

  bookmyshow: {
    tags: ['Digital marketing', 'Campaign', 'Art direction'],
    title: 'Yeh Diwali Lit Wali',
    lede: 'A Diwali festival campaign concept for BookMyShow. Different people, different experiences, one lit Diwali.',
    meta: [
      ['Context', 'Digital marketing assignment (concept)'],
      ['Brand', 'BookMyShow · service brand'],
      ['Deliverables', 'Strategy, key visuals, print, OOH, digital']
    ],
    cover: 'assets/img/bms-posters.jpg',
    blocks: [
      { h: 'The opportunity', p: [
        'BookMyShow is widely seen as the place to book movie tickets, but the platform now covers concerts, plays, workshops, activities and live experiences.',
        'Instead of showing only what Diwali looks like, the campaign shows how different people experience Diwali, and positions BookMyShow as the place to find it.'
      ]},
      { h: 'Communication shift', quote: 'From "Book a movie." → to "Find something to do this Diwali."' },
      { h: 'The idea', p: [
        'The campaign takes the traditional idea of Diwali as the festival of lights and gives "lit" a contemporary second meaning. Light becomes the visual metaphor: instead of diyas and rangoli in every frame, each execution finds its own source of light.',
        'Five glows for five audiences: the screen glow of a movie, the handmade glow of a lantern workshop, the stage glow of a concert, the candle glow of a dinner date, and the diya glow of DIY. One festival, different ways to experience it. #YehDiwaliLitWali'
      ]},
      { h: 'Campaign posters', img: 'assets/img/bms-posters-2.jpg' },
      { h: 'Out of home', img: 'assets/img/bms-ooh.jpg', cap: 'Billboards, digital hoardings and bus shelters' },
      { h: 'Print & cinema', imgs: ['assets/img/bms-print.jpg', 'assets/img/bms-cinema.jpg'], cap: 'Print posters, cinema standees and mall lightboxes' },
      { h: 'Digital & platform', img: 'assets/img/bms-digital.jpg', cap: 'Instagram posts, stories and the in-app experience hub' },
      { h: 'Tone & voice', list: [
        ['Festive & warm', 'Recognisably Diwali without becoming overly traditional.'],
        ['Youthful & playful', 'Wordplay around "lit", relevant to Gen Z and millennials.'],
        ['Experience-led', 'Talks about what people can do and feel, not just what they can book.']
      ]}
    ]
  },

  lijjat: {
    tags: ['Branding', 'Packaging', 'Illustration'],
    title: 'Lijjat Papad',
    lede: 'Simplicity wrapped in culture: a taste of nostalgia presented with modern charm.',
    meta: [
      ['Context', 'Design semantics · conceptual rebrand'],
      ['Discipline', 'Brand identity, packaging'],
      ['Deliverables', 'Logo, palette, type, packaging, merchandise']
    ],
    cover: 'assets/img/lijjat-cover.jpg',
    blocks: [
      { h: 'Why rebrand', p: [
        'Lijjat is a legendary Indian women’s cooperative with a powerful legacy of empowering over 40,000 women and exports to the US, UK, Singapore and Thailand. Yet its packaging has long felt outdated and doesn’t reflect that impact.',
        'This conceptual rebrand gives it packaging that matches its cultural pride and international standards, with bold colours, handcrafted illustration and contemporary aesthetics.'
      ]},
      { h: 'Brand essence', list: [
        ['Tradition with modernity', 'The nostalgic warmth of Indian culture with a fresh, contemporary design language.'],
        ['Women’s strength & craft', 'Reflects the identity, resilience and handmade artistry of the women behind the cooperative.'],
        ['Authentic, global, proud', 'A homegrown icon with the confidence and clarity it deserves on international shelves.']
      ]},
      { h: 'Colour palette', swatches: [
        ['#E7CF6B', 'Muted yellow: warmth, tradition, the sun'],
        ['#C8191F', 'Deep red: bold, high-contrast quality'],
        ['#4F8A3C', 'Deep green: natural, earthy, fresh'],
        ['#111111', 'Long black'],
        ['#FFFFFF', 'Bright white']
      ]},
      { h: 'Typography', p: [
        'Ananda Namaste brings handcrafted, Indian-inspired letterforms that carry the brand’s roots and home-made warmth. Inter balances it with modern clarity for all supporting text.'
      ]},
      { h: 'Packaging', imgs: ['assets/img/lijjat-packaging.jpg', 'assets/img/lijjat-pouch.jpg'] },
      { h: 'Brand in the world', imgs: ['assets/img/lijjat-cap.jpg', 'assets/img/lijjat-tote.jpg', 'assets/img/lijjat-sign.jpg'], cap: 'Cap, tote and storefront signage' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Nav: border on scroll + mobile menu ---------- */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.section-head, .about-grid, .toolkit, .feature, .project-list li, .service, .contact .wrap > *');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  /* ---------- Draggable hero cards ---------- */
  var stack = document.getElementById('heroStack');
  var z = 10;
  stack.querySelectorAll('.drag-card').forEach(function (card) {
    var startX, startY, baseX = 0, baseY = 0, moved = false, active = false;
    card.addEventListener('pointerdown', function (e) {
      active = true; moved = false;
      startX = e.clientX; startY = e.clientY;
      card.setPointerCapture(e.pointerId);
      card.style.zIndex = ++z;
      card.classList.add('dragging');
    });
    card.addEventListener('pointermove', function (e) {
      if (!active) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      card.style.translate = (baseX + dx) + 'px ' + (baseY + dy) + 'px';
    });
    function end(e) {
      if (!active) return;
      active = false;
      card.classList.remove('dragging');
      baseX += e.clientX - startX; baseY += e.clientY - startY;
      if (!moved) openCase(card.dataset.open); // a tap opens the case study
    }
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
  });

  /* ---------- Case study modal ---------- */
  var modal = document.getElementById('modal');
  var content = document.getElementById('modalContent');
  var panel = modal.querySelector('.modal-panel');
  var lastFocus = null;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function img(src, alt) {
    return '<div class="cs-img"><img src="' + src + '" alt="' + esc(alt) + '" loading="lazy"></div>';
  }

  function render(c) {
    var html = '<header class="cs-hero">';
    html += '<p class="tags">' + c.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</p>';
    html += '<h2 class="cs-title" id="modalTitle">' + esc(c.title) + '</h2>';
    html += '<p class="cs-lede">' + esc(c.lede) + '</p>';
    html += '<dl class="cs-meta">' + c.meta.map(function (m) {
      return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>';
    }).join('') + '</dl></header>';

    html += '<div class="cs-body">' + img(c.cover, c.title + ' cover');
    c.blocks.forEach(function (b) {
      html += '<section class="cs-block"><h4>// ' + esc(b.h) + '</h4>';
      if (b.p) html += b.p.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
      if (b.quote) html += '<p class="quote">' + esc(b.quote) + '</p>';
      if (b.img) html += img(b.img, b.h);
      if (b.imgs) html += '<div class="cs-img-row">' + b.imgs.map(function (s) { return img(s, b.h); }).join('') + '</div>';
      if (b.cap) html += '<p class="cs-caption">' + esc(b.cap) + '</p>';
      if (b.stats) html += '<div class="cs-stats">' + b.stats.map(function (s) {
        return '<div class="cs-stat"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>';
      }).join('') + '</div>';
      if (b.list) html += '<ul class="cs-list">' + b.list.map(function (l) {
        return '<li><b>' + esc(l[0]) + '</b>' + esc(l[1]) + '</li>';
      }).join('') + '</ul>';
      if (b.swatches) html += '<div class="swatches">' + b.swatches.map(function (s) {
        return '<span class="swatch"><i style="background:' + s[0] + '"></i>' + esc(s[1]) + '</span>';
      }).join('') + '</div>';
      html += '</section>';
    });
    html += '</div>';
    return html;
  }

  function openCase(key) {
    var c = CASES[key];
    if (!c) return;
    lastFocus = document.activeElement;
    content.innerHTML = render(c);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    panel.scrollTop = 0;
    panel.focus();
  }

  function closeCase() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.feature[data-open]').forEach(function (el) {
    el.addEventListener('click', function () { openCase(el.dataset.open); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCase(el.dataset.open); }
    });
  });
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeCase);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeCase();
  });
});
