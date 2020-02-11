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

//aktywne linki menu
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach(el => {
  el.addEventListener("click", function() {
    ul.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});
