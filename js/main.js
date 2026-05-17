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
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});
const cartToggle = document.querySelector(".cart-toggle");
const cartDrawer = document.querySelector(".cart-drawer");

cartToggle.addEventListener("click", () => {
  cartDrawer.classList.toggle("is-open");
  cartToggle.setAttribute(
    "aria-expanded",
    cartDrawer.classList.contains("is-open"),
  );
});

const buyButtons = document.querySelectorAll(".buy__btn");
const cartProductsContainer = document.querySelector(".cart-drawer__commodity"); // З КРАПКОЮ!
const cartBadge = document.querySelector(".cart-badge");

let cart = [];
function renderCart() {
  if (cartBadge) {
    cartBadge.textContent = "(" + cart.length + ")";
  }

  cartProductsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartProductsContainer.innerHTML =
      '<p class="cart-empty">Корзина пуста 🛒</p>';
    return;
  }

  cart.forEach((item, index) => {
    const productRow = document.createElement("div");
    productRow.classList.add("cart-drawer__commodity-row");

    productRow.innerHTML = `
      <span class="cart-drawer__commodity-title">${item.title}</span>
      <span class="cart-drawer__commodity-price">${item.price} грн</span>
      <button class="cart-drawer__commodity-remove" data-index="${index}">Видалити</button>
    `;
    cartProductsContainer.appendChild(productRow);
  });
}

buyButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const productId = this.dataset.id;
    const productTitle = this.dataset.title;
    const productPrice = Number(this.dataset.price);

    const product = { id: productId, title: productTitle, price: productPrice };
    cart.push(product);

    alert(`Товар "${productTitle}" добавлений у корзину!`);
    document.querySelector(".empty-cart").style.display = "none";
    renderCart();
  });
});

cartProductsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("cart-drawer__commodity-remove")) {
    const itemIndex = event.target.dataset.index;
    cart.splice(itemIndex, 1);
    renderCart();
  }
});
document.addEventListener("click", (e) => {
  if (!cartToggle.contains(e.target) && !cartDrawer.contains(e.target)) {
    cartDrawer.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});
