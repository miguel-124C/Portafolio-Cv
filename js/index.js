/*Variables globales*/
let sizeImgProyectos;
addEventListener("load",()=>{
    if((window.innerWidth > 720)){
        sizeImgProyectos = 500;
        console.log(500);
    }else if(window.innerWidth > 480){
        sizeImgProyectos = 400;
        console.log(400);
    }else if(window.innerWidth > 350){
        sizeImgProyectos = 300;
        console.log(300);
    }
});

const mostrarSeccionClickeada = (obj,ind,prop,value,variable,total) => {
    let varRoot = document.querySelector(':root');
    let color = getComputedStyle(varRoot);

    obj[ind].setAttribute("style",`${prop}: ${color.getPropertyValue(`${variable}`)}`);
    for(let i = 0; i < total; i++){
        if(i != ind){
            obj[i].setAttribute("style",`${prop}: ${value}`);
        }
    }
}

    /*NAv*/

const nav_ul = document.getElementById("nav_ul");
const childNav = nav_ul.children;

for (const element of childNav){
    element.addEventListener("click",()=>{
        mostrarSeccionClickeada(childNav,element.className,"color","#fff","--color-primario",4);
    });
    
}

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
const estadistica = [95,80,75,45,40,30];

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
                }, 15);
        }
        sliderRange = false;
    }
}

addEventListener("scroll",mostrarScroll);

/*Portafolio*/
const containProyect = document.getElementById("container-proyectos");

proyects.forEach(proyecto=>{
    const div = document.createElement("div");
    div.classList.add("proyectos");
    div.innerHTML = `
    <img src="${proyecto.img}" alt="">
    <span>
        <p>${proyecto.dataInfo}</p>
        <a href="${proyecto.href}" target="_blank">Ir al sitio</a>
    </span>
    `;
    containProyect.appendChild(div);
});

const btnImgPortafolio = document.querySelector(".btn-previous-next-img");
const botones = btnImgPortafolio.children;
const proyectos = document.querySelectorAll(".proyectos");

const addTransformTranslate=(size)=>{
    for (const hijos of proyectos) {
        hijos.setAttribute("style",`transform : translateX(${size}px)`);  
    }
}

for (const btn of botones) {
    btn.addEventListener("click",()=>{
        mostrarSeccionClickeada(botones,btn.className,"background","transparent","--color-terciario",8);
        if(btn.className == 0)addTransformTranslate(0);
        if(btn.className == 1)addTransformTranslate(-sizeImgProyectos);
        if(btn.className == 2)addTransformTranslate(-sizeImgProyectos * btn.className);
        if(btn.className == 3)addTransformTranslate(-sizeImgProyectos * btn.className);
        if(btn.className == 4)addTransformTranslate(-sizeImgProyectos * btn.className);
        if(btn.className == 5)addTransformTranslate(-sizeImgProyectos * btn.className);
        if(btn.className == 6)addTransformTranslate(-sizeImgProyectos * btn.className);
        if(btn.className == 7)addTransformTranslate(-sizeImgProyectos * btn.className);
    });
}