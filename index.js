const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("show");
});
