//phần dropdown
var menu = document.getElementById("menu");
var submenu = document.getElementById("submenu");

menu.addEventListener("click", function () {
  submenu.classList.toggle("open");
});
//phần view more
var viewmoreBtn = document.querySelector(".view-more");
var currentBox = 9;
viewmoreBtn.onclick = function () {
  let boxes = [...document.querySelectorAll("#model .box-model")];
  for (var i = currentBox; i < currentBox + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentBox += 3;
  if (currentBox >= boxes.length) {
    viewmoreBtn.style.display = "none";
  }
};

// phần slider
let list = document.querySelector(".slider .list");
let item = document.querySelectorAll(".slider .list .list-item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItem = item.length - 1;
let refreshslider;

next.onclick = function () {
  if (active + 1 > lengthItem) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadslider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItem;
  } else {
    active = active - 1;
  }
  reloadslider();
};
refreshslider = setInterval(() => {
  next.click();
}, 3000);

function reloadslider() {
  let checkleft = item[active].offsetLeft;
  list.style.left = -checkleft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  if (refreshslider) {
    clearInterval(refreshslider);
    refreshslider = setInterval(() => {
      next.click();
    }, 3000);
  }
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadslider();
  });
});
//tech slide
document.getElementById("tech-next").onclick = function () {
  let lists = document.querySelectorAll(".tech-item");
  document.getElementById("tech-slide").appendChild(lists[0]);
};
document.getElementById("tech-prev").onclick = function () {
  let lists = document.querySelectorAll(".tech-item");
  document.getElementById("tech-slide").prepend(lists[lists.length - 1]);
};
