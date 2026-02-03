const menu = document.getElementById("mobileMenu");
const toggle = document.getElementById("menuToggle");
const closeBtns = document.querySelectorAll("[data-close]");

toggle.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  });
});
