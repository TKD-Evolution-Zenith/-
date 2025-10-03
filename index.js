/*const toggle = document.getElementById("toggle-theme");
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
*/
const toggle = document.getElementById("toggle-theme");

// --- Funciones para manejar cookies ---
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

// --- Al cargar la página, aplicar el modo guardado ---
document.addEventListener("DOMContentLoaded", () => {
  const theme = getCookie("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "Modo claro";
  } else {
    toggle.textContent = "Modo oscuro";
  }
});

// --- Botón para alternar tema ---
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "Modo claro";
    setCookie("theme", "dark", 365); // guarda por 1 año
  } else {
    toggle.textContent = "Modo oscuro";
    setCookie("theme", "light", 365);
  }
});

// --- Scroll suave en links ---
document.querySelectorAll(".nav-link").forEach((el) => {
  el.addEventListener("click", () => {
    const target = document.getElementById(el.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
