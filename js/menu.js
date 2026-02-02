const menu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');

function openMenu() {
  menu.setAttribute('data-open', 'true');
  document.body.setAttribute('data-lock', 'true');
}

function closeMenu() {
  menu.setAttribute('data-open', 'false');
  document.body.removeAttribute('data-lock');
}

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu.getAttribute('data-open') === 'true') {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close when clicking overlay or close button
document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeMenu);
});

// Close if clicking outside panel
document.addEventListener('click', (e) => {
  if (menu.getAttribute('data-open') === 'true' && !menu.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

// Prevent clicks inside panel from closing it
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});