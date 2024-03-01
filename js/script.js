// nav-show-hide
const headerBar = document.querySelector(".site-header");
const nav = document.querySelector(".header-nav");
const barsIcon = document.querySelector(".bars-icon");
const timesIcon = document.querySelector(".times-icon");

barsIcon.addEventListener("click" , ()=>{
    timesIcon.classList.remove("none");
    barsIcon.classList.add("none");
    nav.classList.add("active");
})

timesIcon.addEventListener("click" , ()=>{
    timesIcon.classList.add("none");
    barsIcon.classList.remove("none");
    nav.classList.remove("active");
})

// header-background-color-change-when-scroll
document.addEventListener("scroll" , ()=>{
    
    if( window.scrollY > 0 ){
        headerBar.style.backgroundColor = "rgb(49, 47, 47)";
    }else{
        headerBar.style.backgroundColor = "transparent";
    }
})

// change-image-when-click
let choseImg = document.querySelector(".chose-sec-end img");
let changers = document.querySelectorAll(".radio-parent span");
let images = ["images/work/work1.webp" , "images/work/work2.webp" , "images/work/work3.webp"];

changers.forEach((changer,index)=>{
    changer.addEventListener("click" , ()=>{
        changers.forEach( changer => changer.classList.remove("radio-active"));
        changer.classList.add("radio-active");
        choseImg.src = `${images[index]}`
    })
})