// const popup = document.querySelector(".popup-container");
// const button = document.querySelector("button");
// const closeIcon = document.querySelector(".close-icon");
// const overlay = document.querySelector(".overlay");
// ////*
// button.addEventListener("click", () => {
//   popup.classList.add("popup-open");
// });

// closeIcon.addEventListener("click", () => {
//   popup.classList.remove("popup-open");
// });
// overlay.addEventListener("click", () => {
//   popup.classList.remove("popup-open");
// });

const popupContanier = document.querySelector(".popup-container");
const button = document.querySelector("button");
const closeIcon = document.querySelector(".close-icon");
const subbutton = document.querySelector(".sub-button");

button.addEventListener("click", () => {
  popupContanier.classList.add("popup-open");
});

closeIcon.addEventListener("click", () => {
  popupContanier.classList.remove("popup-open");
});

popupContanier.addEventListener("click", (e) => {
  // close only if clicked outside popup
  if (!e.target.closest(".popup")) {
    popupContanier.classList.remove("popup-open");
  }
});
subbutton.addEventListener("click", () => {
  popupContanier.classList.remove("popup-open");
});
