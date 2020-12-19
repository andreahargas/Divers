$(function(){

// SLIDER //
$(".instructors-slider-button").each(function(){

    $(this).on("click", function(){

        let activeButton = $(this);
    
        $(".instructors-slider-button").removeClass("active")
        activeButton.addClass("active");     

        $(".instructors-item").removeClass("active");      
        $(".instructors-item").eq(activeButton.index()).addClass("active").removeClass("prev next");

        let activeInstructor = $(".instructors-item.active");
        let prevInstructor = activeInstructor.prevAll()
        let nextInstructor = activeInstructor.nextAll()

        prevInstructor.removeClass("next").addClass("prev")
        nextInstructor.removeClass("prev").addClass("next")  
    })
})
})