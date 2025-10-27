const toggle = document.getElementById("toggle-theme");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "Modo claro"
    : "Modo oscuro";
});

document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const target = document.getElementById(el.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.target;
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
