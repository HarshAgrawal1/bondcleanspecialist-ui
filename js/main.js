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
      ".service-card, .catalog-card, .photo-tile, .card, .stat, .quote, .feature, .benefit, .section-head, .cta-band, .faq details, .footer-grid > div, .trust-bar article, .review, .service-detail"
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
          <option value="carpet">Carpet steam cleaning</option>
          <option value="spring">Spring cleaning</option>
          <option value="pest">Pest control &amp; flea treatment</option>
          <option value="oven">Oven &amp; BBQ cleaning</option>
          <option value="airbnb">Airbnb cleaning</option>
          <option value="deep">Deep cleaning</option>
          <option value="builder">Builder cleaning</option>
          <option value="upholstery">Upholstery cleaning</option>
          <option value="pressure">Pressure washing</option>
          <option value="gym">Gym cleaning</option>
          <option value="office">Office cleaning</option>
          <option value="hospitality">Pub &amp; hospitality clean</option>
          <option value="retail">Retail store cleaning</option>
        </select>
      </label>
      <label class="field" data-property hidden>
        <span>Property type</span>
        <select>
          <option value="">Choose</option>
          <option>Unit</option>
          <option>House</option>
          <option>Townhouse</option>
          <option>Two storey</option>
        </select>
      </label>
      <div class="grid-2" data-rooms hidden>
        <label class="field">
          <span>Bedrooms</span>
          <select>
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
          <select>
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

    const serviceSelect = form.querySelector("[data-service]");
    const property = form.querySelector("[data-property]");
    const rooms = form.querySelector("[data-rooms]");
    const homeSizeServices = new Set([
      "bond",
      "carpet",
      "spring",
      "airbnb",
      "deep",
      "builder"
    ]);

    function setGroup(group, on) {
      if (!group) return;
      group.hidden = !on;
      group.querySelectorAll("select").forEach((el) => {
        el.required = on;
        if (!on) el.value = "";
      });
    }

    function syncDetails() {
      const needsHomeSize = homeSizeServices.has(serviceSelect ? serviceSelect.value : "");
      setGroup(property, needsHomeSize);
      setGroup(rooms, needsHomeSize);
    }

    if (serviceSelect) serviceSelect.addEventListener("change", syncDetails);
    syncDetails();
  }
})();
