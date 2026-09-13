(function () {
  document.documentElement.classList.add("js-ready");

  const menuBtn = document.querySelector("[data-menu]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const quoteLayer = document.querySelector("[data-quote]");
  const openers = document.querySelectorAll("[data-open-quote]");
  const closers = document.querySelectorAll("[data-close-quote]");

  function openQuote() {
    if (!quoteLayer) return;
    quoteLayer.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeQuote() {
    if (!quoteLayer) return;
    quoteLayer.classList.remove("open");
    document.body.style.overflow = "";
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
  }

  document
    .querySelectorAll(
      ".service-card, .card, .stat, .quote, .feature, .benefit, .section-head, .cta-band, .faq details, .footer-grid > div"
    )
    .forEach((el) => el.setAttribute("data-reveal", ""));

  const revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -48px 0px" }
    );
    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 80}ms`;
      io.observe(el);
    });
  } else {
    revealItems.forEach((el) => el.classList.add("is-in"));
  }

  openers.forEach((btn) => btn.addEventListener("click", openQuote));
  closers.forEach((btn) => btn.addEventListener("click", closeQuote));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeQuote();
  });

  const quoteFields = `
    <div class="steps"><span class="on" data-bar></span><span data-bar></span></div>
    <div data-step="1">
      <label class="field">
        <span>Service required</span>
        <select data-service required>
          <option value="">Choose</option>
          <option value="bond">Bond cleaning</option>
          <option value="spring">Spring cleaning</option>
          <option value="oven">Oven cleaning</option>
        </select>
      </label>
      <label class="field">
        <span>Property type</span>
        <select required>
          <option value="">Choose</option>
          <option>Unit</option>
          <option>House</option>
          <option>Townhouse</option>
          <option>Two storey</option>
        </select>
      </label>
      <div class="grid-2">
        <label class="field">
          <span>Bedrooms</span>
          <select required>
            <option value="">Choose</option>
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
            <option>3 bedrooms</option>
            <option>4 bedrooms</option>
            <option>5+ bedrooms</option>
          </select>
        </label>
        <label class="field">
          <span>Bathrooms</span>
          <select required>
            <option value="">Choose</option>
            <option>1 bathroom</option>
            <option>2 bathrooms</option>
            <option>3 bathrooms</option>
            <option>4 bathrooms</option>
          </select>
        </label>
      </div>
      <label class="field">
        <span>Preferred date</span>
        <input type="date" required />
      </label>
    </div>
    <div data-step="2" hidden>
      <label class="field"><span>Full name</span><input type="text" required /></label>
      <label class="field"><span>Phone number</span><input type="tel" required /></label>
      <label class="field"><span>Email</span><input type="email" required /></label>
      <label class="field"><span>Suburb</span><input type="text" required /></label>
    </div>
    <p class="form-note" data-note></p>
    <div class="form-nav">
      <button class="btn btn-ghost" type="button" data-back hidden>Back</button>
      <button class="btn btn-clay" type="button" data-next>Continue</button>
    </div>
  `;

  document.querySelectorAll("[data-quote-form]").forEach((form) => {
    form.innerHTML = quoteFields;
    setupForm(form);
  });

  document.querySelectorAll("[data-tab-group]").forEach((group) => {
    const tabs = [...group.querySelectorAll("[data-tab]")].filter(
      (tab) => tab.closest("[data-tab-group]") === group
    );
    const panels = [...group.querySelectorAll("[data-panel]")].filter(
      (panel) => panel.closest("[data-tab-group]") === group
    );
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const id = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle("active", t === tab));
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.panel !== id;
        });
      });
    });
  });

  function setupForm(form) {
    const panes = form.querySelectorAll("[data-step]");
    const bars = form.querySelectorAll("[data-bar]");
    const note = form.querySelector("[data-note]");
    const success = form.parentElement.querySelector("[data-success]");
    const nextBtn = form.querySelector("[data-next]");
    const backBtn = form.querySelector("[data-back]");
    let step = 1;

    function showStep(n) {
      step = n;
      panes.forEach((pane) => {
        pane.hidden = Number(pane.dataset.step) !== n;
      });
      bars.forEach((bar, i) => bar.classList.toggle("on", i < n));
      if (backBtn) backBtn.hidden = n === 1;
      if (nextBtn) nextBtn.textContent = n === 2 ? "Send quote request" : "Continue";
      if (note) note.textContent = "";
    }

    showStep(1);

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (step === 1) {
          const visible = form.querySelector("[data-step='1']");
          const required = [...visible.querySelectorAll("[required]")].filter(
            (el) => !el.closest("[hidden]")
          );
          if (!required.every((el) => el.value.trim())) {
            note.textContent = "Please complete the marked details before continuing.";
            return;
          }
          showStep(2);
          return;
        }

        const visible = form.querySelector("[data-step='2']");
        const required = [...visible.querySelectorAll("[required]")];
        if (!required.every((el) => el.value.trim())) {
          note.textContent = "Please add your name, phone and email so we can reply.";
          return;
        }
        form.hidden = true;
        if (success) success.classList.add("show");
      });
    }

    if (backBtn) backBtn.addEventListener("click", () => showStep(1));
  }

  const illos = {
    house: `<svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle class="illo-bob" cx="220" cy="46" r="28" fill="#eef2f7"/>
      <path d="M44 118 L140 48 L236 118" stroke="#0c2958" stroke-width="10" stroke-linejoin="round"/>
      <rect x="68" y="118" width="144" height="78" rx="8" fill="#0c2958"/>
      <rect x="86" y="136" width="36" height="28" rx="4" fill="#fff"/>
      <rect x="158" y="136" width="36" height="28" rx="4" fill="#fff"/>
      <rect x="122" y="150" width="36" height="46" rx="4" fill="#111"/>
      <circle class="illo-spark" cx="58" cy="72" r="5" fill="#dc9b21"/>
      <circle class="illo-spark d2" cx="248" cy="96" r="4" fill="#dc9b21"/>
      <circle class="illo-spark d3" cx="168" cy="40" r="3.5" fill="#dc9b21"/>
      <rect class="illo-wipe" x="196" y="168" width="34" height="10" rx="5" fill="#dc9b21"/>
    </svg>`,
    spray: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="28" width="22" height="36" rx="6" fill="#0c2958"/>
      <rect x="35" y="16" width="12" height="14" rx="3" fill="#111"/>
      <path d="M47 20 H58" stroke="#0c2958" stroke-width="3" stroke-linecap="round"/>
      <circle class="illo-mist" cx="64" cy="18" r="3" fill="#dc9b21"/>
      <circle class="illo-mist d2" cx="70" cy="24" r="2" fill="#dc9b21"/>
      <circle class="illo-mist d3" cx="66" cy="30" r="1.6" fill="#dc9b21"/>
    </svg>`,
    oven: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="18" width="48" height="48" rx="8" fill="#0c2958"/>
      <rect x="24" y="28" width="32" height="22" rx="4" fill="#fff"/>
      <rect class="illo-shine" x="26" y="30" width="10" height="18" rx="2" fill="#dc9b21" opacity=".35"/>
      <circle cx="28" cy="56" r="3" fill="#fff"/>
      <circle cx="40" cy="56" r="3" fill="#fff"/>
      <circle cx="52" cy="56" r="3" fill="#fff"/>
    </svg>`,
    clipboard: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="16" width="36" height="50" rx="6" fill="#0c2958"/>
      <rect x="30" y="12" width="20" height="10" rx="3" fill="#111"/>
      <path class="illo-check" d="M30 34 L36 40 L50 26" stroke="#dc9b21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="illo-check d2" d="M30 50 L36 56 L50 42" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    phone: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect class="illo-bob" x="28" y="12" width="24" height="56" rx="6" fill="#0c2958"/>
      <rect x="32" y="20" width="16" height="28" rx="2" fill="#fff"/>
      <circle cx="40" cy="56" r="3" fill="#dc9b21"/>
    </svg>`,
    clock: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="24" fill="#0c2958"/>
      <circle cx="40" cy="40" r="16" fill="#fff"/>
      <path class="illo-hand" d="M40 40 V28" stroke="#0c2958" stroke-width="3" stroke-linecap="round"/>
      <path d="M40 40 H50" stroke="#dc9b21" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    spark: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="illo-spark" d="M40 12 L46 34 L68 40 L46 46 L40 68 L34 46 L12 40 L34 34 Z" fill="#dc9b21"/>
    </svg>`,
    key: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="40" r="14" fill="#0c2958"/>
      <circle cx="30" cy="40" r="6" fill="#fff"/>
      <rect class="illo-bob" x="42" y="36" width="24" height="8" rx="3" fill="#111"/>
      <rect x="56" y="36" width="5" height="16" rx="2" fill="#dc9b21"/>
    </svg>`,
    home: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 40 L40 18 L64 40" stroke="#0c2958" stroke-width="6" stroke-linejoin="round"/>
      <rect x="24" y="40" width="32" height="24" rx="3" fill="#0c2958"/>
      <rect x="34" y="48" width="12" height="16" rx="2" fill="#fff"/>
      <circle class="illo-spark" cx="60" cy="22" r="4" fill="#dc9b21"/>
    </svg>`,
    calendar: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="20" width="48" height="44" rx="6" fill="#0c2958"/>
      <rect x="16" y="20" width="48" height="12" fill="#111"/>
      <circle class="illo-spark" cx="32" cy="44" r="4" fill="#dc9b21"/>
      <circle cx="48" cy="44" r="4" fill="#fff"/>
      <circle cx="32" cy="54" r="4" fill="#fff"/>
    </svg>`,
    chat: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="18" width="52" height="36" rx="10" fill="#0c2958"/>
      <path d="M28 54 L28 64 L40 54 Z" fill="#0c2958"/>
      <circle class="illo-mist" cx="30" cy="36" r="3" fill="#fff"/>
      <circle class="illo-mist d2" cx="40" cy="36" r="3" fill="#dc9b21"/>
      <circle class="illo-mist d3" cx="50" cy="36" r="3" fill="#fff"/>
    </svg>`,
    shield: `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 12 L62 22 V40 C62 54 40 66 40 66 C40 66 18 54 18 40 V22 Z" fill="#0c2958"/>
      <path class="illo-check" d="M30 40 L38 48 L52 30" stroke="#dc9b21" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  };

  document.querySelectorAll("[data-illo]").forEach((el) => {
    const name = el.getAttribute("data-illo");
    if (illos[name]) el.innerHTML = illos[name];
  });
})();
