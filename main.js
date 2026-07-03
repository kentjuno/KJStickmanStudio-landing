const navLinks = document.querySelectorAll("[data-nav]");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

// Scrollspy for navigation active state
const navObserver = new IntersectionObserver(
  (entries) => {
    const active = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!active) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${active.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -55%", threshold: [0.16, 0.35, 0.6] }
);

sections.forEach((section) => navObserver.observe(section));

// Click to copy elements (e.g. CLI install scripts or activation keys)
document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    await navigator.clipboard.writeText(value);
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
});

// Dynamic year in footer
document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

// Mock UI Tab Switcher
document.querySelectorAll("[data-tab-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".demo-frame");
    if (!parent) return;
    
    // Deactivate all tab headers
    parent.querySelectorAll("[data-tab-target]").forEach((btn) => btn.classList.remove("active"));
    // Hide all tab contents
    parent.querySelectorAll(".mock-content").forEach((content) => content.classList.remove("active"));
    
    // Activate clicked tab
    button.classList.add("active");
    const targetSelector = button.getAttribute("data-tab-target");
    const target = parent.querySelector(targetSelector);
    if (target) {
      target.classList.add("active");
    }
  });
});

// Scroll Reveal Observer (Reduced motion checked via CSS)
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Mobile nav hamburger toggle
const navToggle = document.getElementById("navToggle");
if (navToggle) {
  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  };
  navToggle.addEventListener("click", () =>
    setOpen(!document.body.classList.contains("nav-open"))
  );
  // close drawer after tapping a link
  document.querySelectorAll("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => setOpen(false))
  );
  // close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

// Sticky buy bar: show after scrolling past hero (~400px); dismissible; hide when footer visible
const buyBar = document.getElementById("buyBar");
if (buyBar) {
  let dismissed = false;
  let footerVisible = false;
  const footer = document.querySelector("footer");

  const update = () => {
    if (dismissed) return;
    const show = window.scrollY > 400 && !footerVisible;
    buyBar.hidden = false;
    buyBar.classList.toggle("show", show);
  };

  window.addEventListener("scroll", update, { passive: true });

  if (footer) {
    new IntersectionObserver((entries) => {
      footerVisible = entries[0].isIntersecting;
      update();
    }).observe(footer);
  }

  document.getElementById("buyBarClose").addEventListener("click", () => {
    dismissed = true;
    buyBar.classList.remove("show");
  });

  update();
}
