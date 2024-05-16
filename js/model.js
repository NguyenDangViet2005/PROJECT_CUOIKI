var menu = document.getElementById("menu");
var submenu = document.getElementById("submenu");

menu.addEventListener("click", function () {
  submenu.classList.toggle("open");
});

var slide = document.querySelector(".slide-furniture");
var slide_item = document.querySelectorAll(".slide-furniture .furniture-item");

setInterval(() => {
  var first_item = document.querySelector(
    ".slide-furniture .furniture-item:first-child"
  );
  slide.appendChild(first_item);
}, 3000);
