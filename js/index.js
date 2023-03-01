/*Variables globales*/
let sizeImgProyectos;
addEventListener("load",()=>{
    if((window.screen.availWidth > 720)){
        sizeImgProyectos = 500;
        console.log(500);
    }else if(window.screen.availWidth > 480){
        sizeImgProyectos = 400;
        console.log(400);
    }else if(window.screen.availWidth > 350){
        sizeImgProyectos = 300;
        console.log(300);
    }
});
    /*Efecto typing*/
const text = document.querySelector(".sec-text");

const textLoad=()=>{
    setTimeout(() => {
        text.textContent = "Web developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Front-End developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Student";
    }, 8000);
}

textLoad();

setInterval(textLoad,12000);

/*Efecto de la seccion de conocimientos*/
let animationSlider = true;
let sliderRange = true;
const sliderTrack = document.querySelector(".slider-track");
const rangeEstadistica = document.querySelectorAll(".range-estadistica");
const estadisticaItems = document.querySelectorAll(".list-estadistica-childrens");
const listEstadistida = document.querySelector(".list-estadistica");
const estadistica = [95,90,70,60,40,30,50];

const mostrarScroll = (e)=>{
    let scrollEnY = document.documentElement.scrollTop;
    let screenHeight = window.screen.availHeight;
    if((scrollEnY > Math.floor((screenHeight)*1.5)) && (animationSlider)){
        sliderTrack.style.animation = "scrollx 13s linear infinite";
        colocar = false;
    }
    if((scrollEnY > Math.floor((screenHeight*2) / 1.1)) && (sliderRange)){
        for(const itemsEstadisticas of estadisticaItems){
            itemsEstadisticas.style.animation = "aparecer-lista forwards 1s";
        }
        for (const a in rangeEstadistica){
            let i = 0;
                let slideEstadistica = setInterval(() => {
                    i++;
                    if(i < estadistica[a]){
                        rangeEstadistica[a].value = i;   
                    }else{
                        clearInterval(slideEstadistica);
                    }
                    console.log(2);
                }, 15);
        }
        sliderRange = false;
    }
}

addEventListener("scroll",mostrarScroll);

/*Portafolio*/
const btnImgPortafolio = document.querySelector(".btn-previous-next-img");
const proyectos = document.querySelectorAll(".proyectos");
const botones = btnImgPortafolio.children;

const addTransformTranslate=(size)=>{
    for (const hijos of proyectos) {
        hijos.setAttribute("style",`transform : translateX(${size}px)`);  
    }
}
const checkInputPortafolio=(btn)=>{
    let varRoot = document.querySelector(':root');
    let colorBackground = getComputedStyle(varRoot);

    botones[btn].setAttribute("style",`background: ${colorBackground.getPropertyValue('--color-terciario')}`);
    for(let i = 0; i < 8; i++){
        if(i != btn){
            botones[i].setAttribute("style","background: none");
        }
    }
}

for (const btn in botones) {
    botones[btn].addEventListener("click",()=>{
        checkInputPortafolio(btn);
        if(btn == 0)addTransformTranslate(0);
        if(btn == 1)addTransformTranslate(-sizeImgProyectos);
        if(btn == 2)addTransformTranslate(-sizeImgProyectos * btn);
        if(btn == 3)addTransformTranslate(-sizeImgProyectos * btn);
        if(btn == 4)addTransformTranslate(-sizeImgProyectos * btn);
        if(btn == 5)addTransformTranslate(-sizeImgProyectos * btn);
        if(btn == 6)addTransformTranslate(-sizeImgProyectos * btn);
        if(btn == 7)addTransformTranslate(-sizeImgProyectos * btn);
    });
}