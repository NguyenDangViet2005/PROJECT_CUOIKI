var menu = document.getElementById("menu");
var submenu = document.getElementById("submenu");

menu.addEventListener("click", function () {
  submenu.classList.toggle("open");
});
