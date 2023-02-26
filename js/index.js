const text = document.querySelector(".sec-text");

const textLoad=()=>{
    setTimeout(() => {
        text.textContent = "Web developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Front-End";
    }, 8000);
}

textLoad();

setInterval(textLoad,12000);




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