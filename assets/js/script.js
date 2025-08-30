document.querySelector(".menu_bar").addEventListener("click", ()=> {
    document.querySelector(".menu").classList.toggle("ativo")
    if (menu.classList.contains("ativo"))
        document.querySelector("body").classList.add("overflow-hidden")
    else
        document.querySelector("body").classList.remove("overflow-hidden")
})


document.querySelectorAll(".link_menu").forEach(link => {
    link.addEventListener("click", ()=> {
        document.querySelector(".menu").classList.remove("ativo")
        document.querySelector("body").classList.remove("overflow-hidden")
    });
});

const ver_regras = document.querySelector(".button_ver_regras")
ver_regras.addEventListener("click", ()=> {
    document.getElementById("como_funciona").classList.toggle("expandido")
})

const texto = document.querySelectorAll(".texto_efeito")
const atualiza_texto = () => {
    const eixoY = window.innerHeight / 2
    let fechamento = null, Fechamento = Infinity
    texto.forEach(t => {
        const medida = Math.abs((t.getBoundingClientRect().top + t.getBoundingClientRect().bottom) / 2 - eixoY)
        if (medida < Fechamento) [Fechamento, fechamento] = [medida, t]
    })
    texto.forEach(t => t.classList.remove("ativo"))
    if (fechamento)
        fechamento.classList.add("ativo")
}
window.addEventListener("scroll", atualiza_texto);
window.addEventListener("resize", atualiza_texto);
atualiza_texto();


 // --- CARROSSEL DE PERGUNTAS ---
    const carousel = document.querySelector(".contentor_card_pergunta");
    const cards = document.querySelectorAll(".card_pergunta");
    const prevBtn = document.querySelector(".carousel_button.prev");
    const nextBtn = document.querySelector(".carousel_button.next");
  
    if (cards.length > 0) {
        const cardStyle = window.getComputedStyle(cards[0]);
        const cardWidth = parseInt(cardStyle.width) + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);
  
        let currentPosition = 0;
        const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
        const maxPosition = cards.length - visibleCards;
  
        const updateButtons = () => {
            prevBtn.style.display = currentPosition <= 0 ? "none" : "flex";
            nextBtn.style.display = currentPosition >= maxPosition ? "none" : "flex";
        };
  
        const moveCarousel = () => {
            carousel.scrollTo({ left: currentPosition * cardWidth, behavior: "smooth" });
            updateButtons();
        };
  
        prevBtn.addEventListener("click", () => currentPosition > 0 && (currentPosition--, moveCarousel()));
        nextBtn.addEventListener("click", () => currentPosition < maxPosition && (currentPosition++, moveCarousel()));
  
        document.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft" && currentPosition > 0) currentPosition--;
            else if (e.key === "ArrowRight" && currentPosition < maxPosition) currentPosition++;
            moveCarousel();
        });
  
        let touchStartX = 0;
        carousel.addEventListener("touchstart", e => touchStartX = e.changedTouches[0].screenX, { passive: true });
        carousel.addEventListener("touchend", e => {
            const delta = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(delta) > 50) {
                if (delta < 0 && currentPosition < maxPosition) currentPosition++;
                else if (delta > 0 && currentPosition > 0) currentPosition--;
                moveCarousel();
            }
        }, { passive: true });
  
        updateButtons();
    }

const observador = new IntersectionObserver(entrar => {
    entrar.forEach(card => {
        if (card.isIntersecting)
            card.target.classList.add("visto")   
        else   
            card.target.classList.remove("visto")   
    });
}, {threshold: 0.7});
document.querySelectorAll(".card_fundador").forEach(cards => observador.observe(cards))

const video = document.querySelector("video")
const play_pausa = document.querySelector(".icone_video_play, .fa-pause")

video.muted = false 
video.volume = 1

function play_pausar() {
    const playing = !video.paused && !video.ended

    if (playing) {
        video.pause();
        play_pausa.classList.remove('fa-pause');
        play_pausa.classList.add('icone_video_play');
    }
    else {
        video.play();
        play_pausa.classList.add('fa-pause');
        play_pausa.classList.remove('icone_video_play');
    }
}

video.addEventListener('play', () => {
    play_pausa.classList.remove('icone_video_play');
    play_pausa.classList.add('fa-pause');
});

video.addEventListener('pause', () => {
    play_pausa.classList.remove('fa-pause');
    pla_pausa.classList.add('icone_video_play');
});

play_pausa.addEventListener("click", play_pausar)