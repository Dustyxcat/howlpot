$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {

        slidesPerView: 1.5,
        spaceBetween: 30,
        pagination:{
            el: '.swiper-pagination',
        },
        scrollbar:{
            el: '.swiper-scrollbar',
        },

    }); //scroll event end

    $(".pgn").click(function(){
        
        var clicked = $(this).index();

        $(".bg_1").removeClass("active").eq(clicked).addClass("active");

        $(".pgn").removeClass("main_1");
        $(this).addClass("main_1");

    }); //click event end

//     document.querySelectorAll('*').forEach(el => {
//   el.style.outline = '1px solid blue';
// });

    
    
}); //end

// $(window).scroll(function(){

//     var pageY = $(window).scrollTop();

//     if(pageY > 4490){

//         $(".scoll_5").show(1000);

//     }else if(pageY < 4490){

//         $(".scoll_5").hide(500);
//     };

//     if(pageY > 4500){

//         $(".scoll_5_1").show(1000);

//     }else if(pageY < 4500){

//         $(".scoll_5_1").hide(700);
//     };

// }); // scroll event end