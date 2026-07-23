
alert("Welcome to Ming Xu website!");
 let slides = document.querySelectorAll(".slide");

let dots = document.querySelectorAll(".dot");

let index = 0;



function showSlide(i){


    slides.forEach(function(slide){

        slide.classList.remove("active");

    });


    dots.forEach(function(dot){

        dot.classList.remove("active");

    });



    slides[i].classList.add("active");

    dots[i].classList.add("active");


}
let timer = null;

let slider = document.querySelector(".slider");


// 开始轮播
function start(){

    if(timer != null){

        return;

    }


    timer = setInterval(function(){

        index++;

        if(index >= slides.length){

            index = 0;

        }

        showSlide(index);


    },3000);

}



// 停止轮播
function stop(){

    clearInterval(timer);

    timer = null;

}



slider.addEventListener("mouseenter",function(){

    start();

});



slider.addEventListener("mouseleave",function(){

    stop();

});


