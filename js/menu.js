const menu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');
const closeButtons = document.querySelectorAll('[data-close]');

menuToggle.addEventListener('click', () => {
  menu.dataset.open = "true";
  document.body.style.overflow = "hidden";
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    menu.dataset.open = "false";
    document.body.style.overflow = "";
  });
});