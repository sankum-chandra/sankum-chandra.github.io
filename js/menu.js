document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  const closeTriggers = document.querySelectorAll("[data-close]");

  if (!menu || !toggle) return;

  function openMenu() {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", openMenu);
  closeTriggers.forEach(el => el.addEventListener("click", closeMenu));
});