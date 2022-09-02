$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scoll-up-btn').removeClass("show");
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

   // toggle menu/navbar script
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});
//typing
var typed = new Typed(".typing", {
        strings: ["Software Developer","Designer", "Freelancer"],
        typesSpeed: 100,
        backSpeed: 100,
        loop: true

});


var typed = new Typed(".typing-2", {
    strings: ["Software Developer", "Blogger", "Designer", "Freelancer"],
    typesSpeed: 100,
    backSpeed: 60,
    loop: true

});
   // owl carousel script
   $('.carousel').owlCarousel({
        margin : 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav : false
            },
            600:{
                items: 2,
                nav : false
            },
            1000:{
                items: 3,
                nav : false
            }
        }
   });
});

// email submit

const submitButton = document.querySelector('.column');

submitButton.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('submit')
    
})


