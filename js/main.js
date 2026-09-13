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
      ".service-card, .card, .stat, .quote, .feature, .benefit, .section-head, .cta-band, .faq details, .footer-grid > div, .trust-bar article, .review"
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
    </svg>`,
    mopper: `<svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="420" height="250" fill="#f4f7fb"/>
      <rect x="0" y="250" width="420" height="90" fill="#e8edf3"/>
      <path d="M0 250 H420" stroke="#0c2958" stroke-width="3"/>
      <rect x="18" y="228" width="384" height="10" fill="#0c2958"/>
      <rect x="268" y="42" width="118" height="148" rx="6" fill="#d7e4f7" stroke="#0c2958" stroke-width="3"/>
      <path d="M268 116 H386" stroke="#0c2958" stroke-width="3"/>
      <path d="M327 42 V190" stroke="#0c2958" stroke-width="3"/>
      <path class="illo-shine" d="M286 62 L308 88" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
      <rect x="292" y="198" width="28" height="36" fill="#0c2958"/>
      <ellipse cx="58" cy="168" rx="18" ry="26" fill="#2f6b4f"/>
      <ellipse cx="58" cy="148" rx="22" ry="16" fill="#3d8a62"/>
      <rect x="54" y="188" width="8" height="40" fill="#0c2958"/>
      <path d="M42 214 L70 258 H118 L128 216 Z" fill="#1b2433"/>
      <ellipse cx="85" cy="214" rx="38" ry="9" fill="#0c2958"/>
      <ellipse cx="85" cy="218" rx="22" ry="5" fill="#4a90c2" opacity=".5"/>
      <g class="illo-mop">
        <path d="M214 78 L104 232" stroke="#0c2958" stroke-width="6" stroke-linecap="round"/>
        <path d="M82 230 Q104 252 128 230" fill="#dc9b21" stroke="#0c2958" stroke-width="2.5"/>
        <path d="M90 236 L122 236" stroke="#0c2958" stroke-width="2"/>
      </g>
      <circle cx="176" cy="112" r="24" fill="#f3c9a4" stroke="#0c2958" stroke-width="2.5"/>
      <path d="M154 104 C164 86 196 84 200 108" fill="#1b2433"/>
      <circle cx="168" cy="110" r="2" fill="#0c2958"/>
      <circle cx="182" cy="110" r="2" fill="#0c2958"/>
      <path d="M168 120 Q176 124 184 120" stroke="#0c2958" stroke-width="1.5" fill="none"/>
      <rect x="154" y="136" width="48" height="18" rx="8" fill="#0c2958"/>
      <rect x="148" y="150" width="60" height="62" rx="10" fill="#0c2958"/>
      <rect x="154" y="208" width="18" height="44" rx="6" fill="#0c2958"/>
      <rect x="184" y="208" width="18" height="44" rx="6" fill="#0c2958"/>
      <path d="M190 168 L216 128" stroke="#f3c9a4" stroke-width="9" stroke-linecap="round"/>
      <path d="M148 168 L132 186" stroke="#f3c9a4" stroke-width="9" stroke-linecap="round"/>
      <rect x="140" y="248" width="28" height="10" rx="3" fill="#111"/>
      <rect x="180" y="248" width="28" height="10" rx="3" fill="#111"/>
      <circle class="illo-spark" cx="398" cy="56" r="5" fill="#dc9b21"/>
      <circle class="illo-spark d2" cx="24" cy="72" r="4" fill="#dc9b21"/>
    </svg>`,
    window: `<svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="250" fill="#f4f7fb"/>
      <rect y="250" width="420" height="90" fill="#e8edf3"/>
      <path d="M0 250 H420" stroke="#0c2958" stroke-width="3"/>
      <rect x="18" y="228" width="384" height="10" fill="#0c2958"/>
      <rect x="36" y="36" width="188" height="196" rx="8" fill="#c5d6ea" stroke="#0c2958" stroke-width="4"/>
      <path d="M36 134 H224" stroke="#0c2958" stroke-width="4"/>
      <path d="M130 36 V232" stroke="#0c2958" stroke-width="4"/>
      <path class="illo-shine" d="M56 58 L86 96" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
      <rect x="48" y="44" width="14" height="70" fill="#0c2958" opacity=".12"/>
      <circle cx="268" cy="98" r="24" fill="#f3c9a4" stroke="#0c2958" stroke-width="2.5"/>
      <path d="M248 90 C258 74 288 76 290 96" fill="#1b2433"/>
      <circle cx="260" cy="96" r="2" fill="#0c2958"/>
      <circle cx="274" cy="96" r="2" fill="#0c2958"/>
      <rect x="248" y="122" width="48" height="16" rx="8" fill="#0c2958"/>
      <rect x="242" y="136" width="60" height="64" rx="10" fill="#0c2958"/>
      <g class="illo-wipe">
        <rect x="176" y="88" width="38" height="24" rx="5" fill="#fff" stroke="#0c2958" stroke-width="2.5"/>
        <path d="M214 100 H246" stroke="#f3c9a4" stroke-width="8" stroke-linecap="round"/>
      </g>
      <rect x="246" y="196" width="18" height="48" rx="6" fill="#0c2958"/>
      <rect x="276" y="196" width="18" height="48" rx="6" fill="#0c2958"/>
      <rect x="238" y="240" width="28" height="10" rx="3" fill="#111"/>
      <rect x="270" y="240" width="28" height="10" rx="3" fill="#111"/>
      <rect x="330" y="188" width="54" height="40" rx="4" fill="#fff" stroke="#0c2958" stroke-width="2.5"/>
      <rect x="338" y="198" width="16" height="22" fill="#0c2958"/>
      <rect x="360" y="206" width="16" height="14" fill="#dc9b21"/>
    </svg>`,
    ovenkneel: `<svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="248" fill="#f4f7fb"/>
      <rect y="248" width="420" height="92" fill="#e8edf3"/>
      <path d="M0 248 H420" stroke="#0c2958" stroke-width="3"/>
      <rect x="24" y="58" width="168" height="196" rx="8" fill="#2a3140" stroke="#0c2958" stroke-width="3"/>
      <rect x="40" y="74" width="136" height="88" rx="6" fill="#d7e4f7"/>
      <rect class="illo-shine" x="52" y="84" width="32" height="68" rx="4" fill="#dc9b21" opacity=".28"/>
      <rect x="48" y="176" width="120" height="10" fill="#111"/>
      <circle cx="64" cy="204" r="7" fill="#e8edf3"/>
      <circle cx="92" cy="204" r="7" fill="#e8edf3"/>
      <circle cx="120" cy="204" r="7" fill="#e8edf3"/>
      <rect x="40" y="220" width="136" height="18" rx="3" fill="#111"/>
      <circle cx="272" cy="154" r="24" fill="#f3c9a4" stroke="#0c2958" stroke-width="2.5"/>
      <path d="M252 146 C262 130 292 132 294 152" fill="#1b2433"/>
      <circle cx="264" cy="152" r="2" fill="#0c2958"/>
      <circle cx="278" cy="152" r="2" fill="#0c2958"/>
      <rect x="248" y="178" width="52" height="54" rx="10" fill="#0c2958"/>
      <path d="M250 196 L196 178" stroke="#f3c9a4" stroke-width="9" stroke-linecap="round"/>
      <rect x="244" y="226" width="20" height="36" rx="6" fill="#0c2958"/>
      <rect x="278" y="228" width="22" height="34" rx="6" fill="#0c2958"/>
      <rect x="232" y="258" width="30" height="10" rx="3" fill="#111"/>
      <rect x="274" y="258" width="30" height="10" rx="3" fill="#111"/>
      <rect x="332" y="210" width="48" height="36" rx="6" fill="#fff" stroke="#0c2958" stroke-width="2.5"/>
      <circle class="illo-spark" cx="392" cy="70" r="5" fill="#dc9b21"/>
    </svg>`,
    vacuum: `<svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="248" fill="#f4f7fb"/>
      <rect y="248" width="420" height="92" fill="#e8edf3"/>
      <path d="M0 248 H420" stroke="#0c2958" stroke-width="3"/>
      <rect x="18" y="226" width="384" height="10" fill="#0c2958"/>
      <rect x="300" y="78" width="86" height="120" rx="6" fill="#d7e4f7" stroke="#0c2958" stroke-width="3"/>
      <path d="M300 138 H386" stroke="#0c2958" stroke-width="3"/>
      <circle cx="156" cy="102" r="24" fill="#f3c9a4" stroke="#0c2958" stroke-width="2.5"/>
      <path d="M136 94 C146 76 176 76 180 96" fill="#1b2433"/>
      <circle cx="148" cy="100" r="2" fill="#0c2958"/>
      <circle cx="162" cy="100" r="2" fill="#0c2958"/>
      <rect x="136" y="126" width="48" height="16" rx="8" fill="#0c2958"/>
      <rect x="128" y="140" width="64" height="66" rx="10" fill="#0c2958"/>
      <rect x="132" y="202" width="18" height="46" rx="6" fill="#0c2958"/>
      <rect x="166" y="202" width="18" height="46" rx="6" fill="#0c2958"/>
      <rect x="124" y="244" width="28" height="10" rx="3" fill="#111"/>
      <rect x="160" y="244" width="28" height="10" rx="3" fill="#111"/>
      <path d="M184 158 L226 176" stroke="#f3c9a4" stroke-width="9" stroke-linecap="round"/>
      <g class="illo-bob">
        <rect x="246" y="176" width="78" height="52" rx="18" fill="#0c2958"/>
        <circle cx="266" cy="236" r="15" fill="#111" stroke="#0c2958" stroke-width="3"/>
        <circle cx="306" cy="236" r="15" fill="#111" stroke="#0c2958" stroke-width="3"/>
        <circle cx="266" cy="236" r="5" fill="#dc9b21"/>
        <circle cx="306" cy="236" r="5" fill="#dc9b21"/>
        <path d="M226 176 C210 190 198 214 186 232" stroke="#1b2433" stroke-width="7" stroke-linecap="round"/>
        <rect x="164" y="228" width="40" height="14" rx="7" fill="#dc9b21" stroke="#0c2958" stroke-width="2"/>
      </g>
      <ellipse cx="48" cy="188" rx="16" ry="22" fill="#2f6b4f"/>
      <rect x="44" y="204" width="8" height="28" fill="#0c2958"/>
    </svg>`,
    boxes: `<svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="248" fill="#f4f7fb"/>
      <rect y="248" width="420" height="92" fill="#e8edf3"/>
      <path d="M0 248 H420" stroke="#0c2958" stroke-width="3"/>
      <rect x="18" y="226" width="384" height="10" fill="#0c2958"/>
      <rect x="28" y="176" width="92" height="68" rx="4" fill="#dc9b21" stroke="#0c2958" stroke-width="3"/>
      <path d="M28 196 H120" stroke="#0c2958" stroke-width="2"/>
      <path d="M74 176 V244" stroke="#0c2958" stroke-width="2"/>
      <rect x="70" y="132" width="86" height="58" rx="4" fill="#0c2958"/>
      <path d="M70 152 H156" stroke="#fff" stroke-width="2" opacity=".25"/>
      <circle cx="268" cy="112" r="24" fill="#f3c9a4" stroke="#0c2958" stroke-width="2.5"/>
      <path d="M248 104 C258 86 288 88 292 108" fill="#1b2433"/>
      <circle cx="260" cy="110" r="2" fill="#0c2958"/>
      <circle cx="274" cy="110" r="2" fill="#0c2958"/>
      <rect x="248" y="136" width="48" height="16" rx="8" fill="#0c2958"/>
      <rect x="242" y="150" width="60" height="62" rx="10" fill="#0c2958"/>
      <rect x="200" y="158" width="78" height="50" rx="5" fill="#eef2f7" stroke="#0c2958" stroke-width="3"/>
      <path d="M200 176 H278" stroke="#0c2958" stroke-width="2"/>
      <path d="M239 158 V208" stroke="#0c2958" stroke-width="2"/>
      <rect x="246" y="208" width="18" height="42" rx="6" fill="#0c2958"/>
      <rect x="276" y="208" width="18" height="42" rx="6" fill="#0c2958"/>
      <rect x="238" y="246" width="28" height="10" rx="3" fill="#111"/>
      <rect x="270" y="246" width="28" height="10" rx="3" fill="#111"/>
      <rect x="332" y="198" width="56" height="44" rx="4" fill="#fff" stroke="#0c2958" stroke-width="2.5"/>
    </svg>`
  };

  document.querySelectorAll("[data-illo]").forEach((el) => {
    const name = el.getAttribute("data-illo");
    if (illos[name]) el.innerHTML = illos[name];
  });
})();
