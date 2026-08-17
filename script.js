// Small interactions for the prototype.
const rows = document.querySelectorAll(".leader-row");
rows.forEach((row, i) => {
  row.addEventListener("mouseenter", () => row.style.transform = "translateX(5px)");
  row.addEventListener("mouseleave", () => row.style.transform = "");
});

// Smoothly reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".section, .submit-band, .about-section, .submission-section").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
