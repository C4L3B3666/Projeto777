var menu_bar = document.querySelector(".menu_bar") 
menu_bar.addEventListener("click", ()=> {
    document.querySelector(".nav_mobile").classList.toggle("clip")
    document.querySelector(".nav_mobile").classList.toggle("clipX")
})

var ver_regras = document.querySelector(".button_ver_regras")
ver_regras.addEventListener("click", ()=> {
    var secao2 = document.getElementById("secao2").classList.toggle("secao2_expandida")
})