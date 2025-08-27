var menu_bar = document.querySelector(".menu_bar") 
menu_bar.addEventListener("click", ()=> {
    document.querySelector(".nav_mobile").classList.toggle("clip")
    document.querySelector(".nav_mobile").classList.toggle("clipX")
})