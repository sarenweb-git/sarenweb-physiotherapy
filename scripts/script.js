let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header-icon__responsive")
let menuBtnIcon = document.querySelector(".header-icon__responsive i")


menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.right= "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.right= "-34rem"
        menuBtnIcon.classList = "fa fa-bars"
    }
})