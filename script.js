let btn = document.querySelector(".btn");
let nav = document.querySelector(".active");

btn.addEventListener("click", function(){
    btn.classList.toggle("btn-active");
    nav.classList.toggle("nav-mobi");
});