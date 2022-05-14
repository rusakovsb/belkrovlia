(function ($) {	

    $(".region-header-right").append('<button class="menu-icon"><span></span><span></span><span></span></button>');
	  
	$(".region-mobile-panel").prepend('<button class="menu-close-icon"><span></span><span></span></button>');	  
	  
    $(".menu-icon").click(function () {
        $(".page-overlay").fadeIn();
        gsap.to(".mobile-panel", {
            ease: "power1.out",  
            duration: 0.5,      
            x: "0%"          
        })   
    });	

    $(".menu-close-icon, .page-overlay").click(function () {
        $(".page-overlay").fadeOut()
        gsap.to(".mobile-panel", {
            ease: "power1.out",  
            duration: 0.5,      
            x: "100%"
        })   
    });	

})(jQuery);



