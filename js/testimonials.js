
$(".testimonials-slider-button-next").on("click", function(){

    let currentSlide = $(".testimonials-item.active");
    let nextSlide = currentSlide.next();

    currentSlide.removeClass("active next").addClass("prev");
    nextSlide.removeClass("next").addClass("active");

    if(nextSlide.length == 0){
        currentSlide.addClass("active").removeClass("prev")
    };

    if($(".testimonials-item:last-child").hasClass("active")){
        $(".testimonials-slider-button-next").css("cursor", "default");
    }

    if(!$(".testimonials-item:first-child").hasClass("active")){
        $(".testimonials-slider-button-prev").css("cursor", "pointer")
    }

})

$(".testimonials-slider-button-prev").on("click", function(){

    let currentSlide = $(".testimonials-item.active");
    let prevSlide = currentSlide.prev();

    currentSlide.removeClass("active").addClass("next");
    prevSlide.removeClass("prev").addClass("active");

    if(prevSlide.length == 0){
        currentSlide.addClass("active").removeClass("next")
    };

    if(!$(".testimonials-item:last-child").hasClass("active")){
        $(".testimonials-slider-button-next").css("cursor", "pointer")
    }
    
    if($(".testimonials-item:first-child").hasClass("active")){
        $(".testimonials-slider-button-prev").css("cursor", "default")
    }  

})