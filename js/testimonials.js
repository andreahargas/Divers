$(function(){

    // SLIDER // 
    $(".testimonials-slider-button-next").on("click", function(){

        let currentSlide = $(".testimonials-item.active");
        let nextSlide = currentSlide.next();

        currentSlide.removeClass("active next").addClass("prev");
        nextSlide.removeClass("next").addClass("active");

        if(nextSlide.length == 0){
            currentSlide.addClass("active").removeClass("prev");
        };

        if($(".testimonials-item:last-child").hasClass("active")){
            $(".testimonials-slider-button-next").css("cursor", "default");
            $(".testimonials-slider-button-next").removeClass("hover");
        };

        if(!$(".testimonials-item:first-child").hasClass("active")){
            $(".testimonials-slider-button-prev").css("cursor", "pointer");
            $(".testimonials-slider-button-prev").addClass("hover");
        };
    })

    $(".testimonials-slider-button-prev").on("click", function(){

        let currentSlide = $(".testimonials-item.active");
        let prevSlide = currentSlide.prev();

        currentSlide.removeClass("active").addClass("next");
        prevSlide.removeClass("prev").addClass("active");

        if(prevSlide.length == 0){
            currentSlide.addClass("active").removeClass("next");
        };
        
        if($(".testimonials-item:first-child").hasClass("active")){
            $(".testimonials-slider-button-prev").css("cursor", "default");
            $(".testimonials-slider-button-prev").removeClass("hover");
        }; 

        if(!$(".testimonials-item:last-child").hasClass("active")){
            $(".testimonials-slider-button-next").css("cursor", "pointer");
            $(".testimonials-slider-button-next").addClass("hover");
        };
    })

    // BIGGER SCREEN SLIDER //
    $(".testimonials-reviews-portrait").each(function(){

        $(this).on("click", function(){

            let activePortrait = $(this);
        
            $(".testimonials-reviews-portrait").removeClass("active");
            activePortrait.addClass("active");     

            $(".testimonials-item").removeClass("active");      
            $(".testimonials-item").eq(activePortrait.index()).addClass("active").removeClass("prev next");

            let currentSlide = $(".testimonials-item.active");
            let prevSlide = currentSlide.prevAll();
            let nextSlide = currentSlide.nextAll();

            prevSlide.removeClass("next").addClass("prev");
            nextSlide.removeClass("prev").addClass("next"); 
        });
    });
});