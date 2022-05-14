(function ($) {
 		
    $(".view-slider__content, .view-works-slider__content, .view-manufacturers-slider__content").addClass("swiper");

    var slider = new Swiper ('.view-slider .swiper', {
      slidesPerView: '1', 
      effect: 'fade',
      speed: 800,
      spaceBetween: 0,       
      loop: true,
      autoplay: {
        delay: 3000,
      },
    })   
    
    var manufacturers = new Swiper ('.view-manufacturers-slider .swiper', {
      slidesPerView: '2', 
      spaceBetween: 16,
      speed: 800, 
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        769: {
            slidesPerView: 3, 
            spaceBetween: 32,
        },
      }
    })

    $(".advantage-list-item__icon--discount").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"><polygon points="50,2 60.6,10.6 74,8.4 78.9,21.1 91.6,26 89.4,39.4 98,50 89.4,60.6 91.6,74 78.9,78.9 74,91.6   60.6,89.4 50,98 39.4,89.4 26,91.6 21.1,78.9 8.4,74 10.6,60.6 2,50 10.6,39.4 8.4,26 21.1,21.1 26,8.4 39.4,10.6 "/><path d="M29.6,29.6c-2.8,2.8-2.8,7.4,0,10.2c2.8,2.8,7.4,2.8,10.2,0c2.8-2.8,2.8-7.4,0-10.2  C37,26.8,32.4,26.8,29.6,29.6z"/><path d="M70.4,70.4c2.8-2.8,2.8-7.4,0-10.2c-2.8-2.8-7.4-2.8-10.2,0c-2.8,2.8-2.8,7.4,0,10.2  C63,73.2,67.6,73.2,70.4,70.4z"/><line x1="34.7" y1="72.5" x2="65.3" y2="27.5"/></svg>');
    $(".advantage-list-item__icon--consult").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"><path d="M20.4,34.2v-3.3l5.2-3.3c0-9.8,5.9-18.4,14.4-22.2l3.9,3.9V2h12.2v7.2L60,5.3c8.4,3.8,14.4,12.3,14.4,22.2 l5.2,3.3v3.3C59.9,34.2,40.1,34.2,20.4,34.2z"/><path d="M27.6,60.5h5.1c4.1,5,10.4,8.3,17.3,8.3h0c7,0,13.2-3.2,17.3-8.3h5.1c12.3,0,22.4,10.1,22.4,22.4V98H5.1V82.9 C5.1,70.6,15.2,60.5,27.6,60.5z"/><path d="M72.4,34.2V38c0,12.3-10.1,22.4-22.4,22.4h0c-12.3,0-22.4-10.1-22.4-22.4v-3.8H72.4z"/></svg>');
    $(".advantage-list-item__icon--warranty").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"><polygon points="50,2 60.6,10.6 74,8.4 78.9,21.1 91.6,26 89.4,39.4 98,50 89.4,60.6 91.6,74 78.9,78.9 74,91.6   60.6,89.4 50,98 39.4,89.4 26,91.6 21.1,78.9 8.4,74 10.6,60.6 2,50 10.6,39.4 8.4,26 21.1,21.1 26,8.4 39.4,10.6 "/><ellipse cx="50" cy="50" rx="28.9" ry="28.9"/><polyline points="37.6,50 46.2,58.6 64.2,40.6 "/></svg>');
    $(".advantage-list-item__icon--certificate").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"><rect x="2.1" y="2" width="72" height="96"/><rect x="10.1" y="10" width="56" height="80"/><line x1="26.1" y1="26" x2="50.1" y2="26"/><line x1="18.1" y1="34" x2="58.1" y2="34"/><line x1="18.1" y1="42" x2="58.1" y2="42"/><line x1="18.1" y1="50" x2="58.1" y2="50"/><line x1="18.1" y1="58" x2="58.1" y2="58"/><path d="M50.1,82c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8C42.1,78.4,45.7,82,50.1,82z"/><line x1="18.1" y1="66" x2="34.1" y2="66"/><line x1="18.1" y1="74" x2="34.1" y2="74"/></svg>');	

    $(".slider-nav__button-prev").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 100"><path d="M59,93.3l-5.1,5.1c-2.2,2.2-5.6,2.2-7.8,0L1.6,53.9c-2.2-2.2-2.2-5.6,0-7.8L46.1,1.6c2.2-2.2,5.6-2.2,7.8,0 L59,6.7c2.2,2.2,2.1,5.7-0.1,7.9L31.3,40.8h113.2c3,0,5.5,2.5,5.5,5.5v7.3c0,3-2.5,5.5-5.5,5.5H31.3l27.6,26.3 C61.1,87.6,61.2,91.1,59,93.3L59,93.3z"/></svg>');
    $(".slider-nav__button-next").prepend('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 100" ><path d="M91,93.3l5.1,5.1c2.2,2.2,5.6,2.2,7.8,0l44.5-44.5c2.2-2.2,2.2-5.6,0-7.8L103.9,1.6c-2.2-2.2-5.6-2.2-7.8,0 L91,6.7c-2.2,2.2-2.1,5.7,0.1,7.9l27.6,26.3H5.5c-3,0-5.5,2.5-5.5,5.5v7.3c0,3,2.5,5.5,5.5,5.5h113.2L91.1,85.4 C88.9,87.6,88.8,91.1,91,93.3L91,93.3z"/></svg>');
    
    $(".region-popup").append('<button class="popup-close"><span></span><span></span></button>');	    
	  
  	$(".request-button").click(function (event) {	
        event.preventDefault()
        $(".popup").fadeIn(); 
  	});	
	  
  	$(".popup-close").click(function () {	
        $(".popup").fadeOut();	
  	});

  	$(".popup-overlay").click(function () {
        $(".popup").fadeOut();
    });

    $("table").wrap('<div class="table-wrapper"></div>');

    gsap.registerPlugin(ScrollTrigger);

    const counters = function() {
        $(".counter__number").each(function() {
            var count = $(this),
                zero = {val:0};
            gsap.to(zero,{
                duration: 1.5,
                val: count.data("number"),
                onUpdate: countNumber
            })
            function countNumber() {
                var final = gsap.utils.snap(1, zero.val);
                count.text(final);
            }
        });
    };  
    
    gsap.to(".counters", {        
        scrollTrigger: {
            trigger: ".counters",
            start: 'top bottom',
            onEnter: counters,
        }
    });

})(jQuery);



