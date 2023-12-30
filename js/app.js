//wysuwane menu
const menu = document.getElementById("nav");
const icon = document.querySelector(".menuicon");
icon.addEventListener("click", () => {
  toggle.classList.toggle("actives");
  nav.classList.toggle("actives");
});
menu.addEventListener("click", () => {
  nav.classList.toggle("actives");
  toggle.classList.toggle("actives");
});

// aktywne linki menu
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach((el) => {
  el.addEventListener("click", function () {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});
// scroll to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var yearRangeElement = document.getElementById("yearRange");
yearRangeElement.innerHTML = "B-M<span>B</span>T&nbsp;2020 - " + currentYear;
