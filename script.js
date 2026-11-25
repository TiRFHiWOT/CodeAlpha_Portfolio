// CodeAlpha Task 3 — Portfolio Site
// Theme toggle, smooth scroll with header offset, mobile menu,
// and fade-in animations as sections scroll into view.

// ---------- theme (same as Tasks 1 and 2: dark navy default) ----------
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
function syncThemeButton() {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  themeToggle.textContent = light ? "☾" : "☀";
}
syncThemeButton();
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
  syncThemeButton();
});

// ---------- mobile menu ----------
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  })
);

// ---------- smooth scroll (accounts for the sticky top bar) ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ---------- CV download: force a file download, don't just open the PDF ----------
// Some browsers and in-app viewers ignore the `download` attribute on a plain
// link and open the PDF instead. Fetching the file and downloading it as a
// blob makes the browser save it. If anything fails, fall back to the link.
const cvLink = document.querySelector('a[download]');
if (cvLink) {
  cvLink.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(cvLink.getAttribute("href"));
      if (!res.ok) throw new Error("CV fetch failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = cvLink.getAttribute("download") || "TIRFHIWOT_HAILU_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      window.location.href = cvLink.getAttribute("href");
    }
  });
}

// ---------- fade-in on scroll ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
