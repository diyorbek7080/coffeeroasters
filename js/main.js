let elSiteHeader = document.querySelector(".header");
let elHamburBtn = document.querySelector(".header__hamburger");


elHamburBtn.addEventListener('click', function(){
  elSiteHeader.classList.toggle("header--opener");
});