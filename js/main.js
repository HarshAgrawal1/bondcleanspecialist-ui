(function () {
  document.documentElement.classList.add("js-ready");

  document.querySelectorAll(".hero-bg video").forEach((video) => {
    video.muted = true;
    const play = () => video.play().catch(() => {});
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });
  });

  const menuBtn = document.querySelector("[data-menu]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const quoteLayer = document.querySelector("[data-quote]");
  const openers = document.querySelectorAll("[data-open-quote]");
  const closers = document.querySelectorAll("[data-close-quote]");
  let quoteScrollY = 0;

  if (quoteLayer) {
    document.documentElement.appendChild(quoteLayer);
  }

  function isQuoteOpen() {
    return !!(quoteLayer && quoteLayer.classList.contains("open"));
  }

  function onQuoteScroll(e) {
    if (!isQuoteOpen()) return;
    if (e.target.closest(".quote-panel")) return;
    e.preventDefault();
  }

  function openQuote() {
    if (!quoteLayer) return;
    quoteScrollY = window.scrollY || window.pageYOffset || 0;
    quoteLayer.classList.add("open");
    document.documentElement.classList.add("is-quote-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${quoteScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  function closeQuote() {
    if (!quoteLayer) return;
    quoteLayer.classList.remove("open");
    document.documentElement.classList.remove("is-quote-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, quoteScrollY);
  }

  document.addEventListener("wheel", onQuoteScroll, { passive: false });
  document.addEventListener("touchmove", onQuoteScroll, { passive: false });

  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
  }

  document.querySelectorAll("[data-mobile-drop]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrap = btn.closest(".mobile-drop");
      if (wrap) wrap.classList.toggle("open");
    });
  });

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
    <p class="step-label" data-step-label>Step 1 of 2 — Your details</p>
    <div data-step="1">
      <label class="field"><span>Full name</span><input type="text" required /></label>
      <label class="field"><span>Phone number</span><input type="tel" required /></label>
      <label class="field"><span>Email</span><input type="email" required /></label>
    </div>
    <div data-step="2" hidden>
      <label class="field">
        <span>Service required</span>
        <select data-service required>
          <option value="">Choose</option>
          <option value="bond">Bond cleaning</option>
          <option value="carpet">Carpet steam cleaning</option>
          <option value="spring">Spring cleaning</option>
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
          <option value="pest">Pest control &amp; flea treatment</option>
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
      <label class="field"><span>Suburb</span><input type="text" required /></label>
      <label class="field">
        <span>Preferred date</span>
        <input type="date" required />
      </label>
    </div>
    <p class="form-note" data-note></p>
    <div class="form-nav">
      <button class="btn btn-ghost" type="button" data-back hidden>Back</button>
      <button class="btn btn-gold" type="button" data-next>Continue</button>
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
    const label = form.querySelector("[data-step-label]");
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
      if (nextBtn) nextBtn.textContent = n === 2 ? "GET MY FREE QUOTE" : "Continue";
      if (label) {
        label.textContent =
          n === 1 ? "Step 1 of 2 — Your details" : "Step 2 of 2 — Property details";
      }
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
          note.textContent = "Please complete the property details so we can quote.";
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

  document.querySelectorAll(".faq-grid, .faq").forEach((group) => {
    if (group.matches(".faq") && group.closest(".faq-grid")) return;
    const items = group.querySelectorAll("details");
    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  });

  const toTop = document.querySelector("[data-to-top]");
  const footerEl = document.querySelector(".site-footer");
  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    if (footerEl && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([entry]) => toTop.classList.toggle("show", entry.isIntersecting),
        { threshold: 0.08 }
      );
      io.observe(footerEl);
    } else {
      const onScroll = () => {
        const nearBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 280;
        toTop.classList.toggle("show", nearBottom);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }
})();
