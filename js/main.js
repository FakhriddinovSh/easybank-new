var elOpenBtn = document.querySelector(".header__btn")
var elHeader = document.querySelector(".header")

elOpenBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header--active")
})