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
    .querySelectorAll(".section, .card, .stat, .quote, .feature, .benefit, .page-hero")
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
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

  document.querySelectorAll("[data-quote-form]").forEach(setupForm);

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
    const service = form.querySelector("[data-service]");
    const bondFields = form.querySelector("[data-bond]");
    const springFields = form.querySelector("[data-spring]");
    let step = 1;

    function showService() {
      const value = service ? service.value : "bond";
      if (bondFields) bondFields.hidden = value !== "bond";
      if (springFields) springFields.hidden = value !== "spring";
    }

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

    if (service) service.addEventListener("change", showService);
    showService();
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
})();
