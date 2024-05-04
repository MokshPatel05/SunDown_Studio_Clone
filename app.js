const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
        let elemC = document.querySelector(".elem-container");
    let fix = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function(){
        fix.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function(){
        fix.style.display = "none";
    })

    let elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            let image = e.getAttribute("data-image");
            fix.style.backgroundImage = `url(${image})`
        })
    })    

}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
      });
};

function menuAnimation() {
    
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
};

function loaderAnimation(){
    let loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%";
},4000)
};

swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();
