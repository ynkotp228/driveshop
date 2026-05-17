document.querySelectorAll('.buy__btn').forEach(btn => {
    btn.addEventListener('click', () => alert('Це демо-сайт, кошик працює тільки в межах сесії'));
})

let takePromo = document.getElementById("header__button");
takePromo.addEventListener("click", function () {
  alert("Ви отримали промокод: 'CLDC2026', на знижку 20%! ");
});
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-open");

  const isOpen = nav.classList.contains("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
  const cartToggle = document.querySelector('.cart-toggle');
  const cartDrawer = document.querySelector('.cart-drawer');
  
  cartToggle.addEventListener('click', () => {
    cartDrawer.classList.toggle('is-open');
    cartToggle.setAttribute('aria-expanded', cartDrawer.classList.contains('is-open'));
  });
 