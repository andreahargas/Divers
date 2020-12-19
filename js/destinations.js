$(function(){

// CHANGE SLIDE //
$(".destinations-slider-button").each(function(){

    $(this).on("click", function(){

        let activeButton = $(this);
    
        $(".destinations-slider-button").removeClass("active")
        activeButton.addClass("active");     

        $(".destinations-item").removeClass("active");      
        $(".destinations-item").eq(activeButton.index()).addClass("active").removeClass("prev next");

        let activeInstructor = $(".destinations-item.active");
        let prevInstructor = activeInstructor.prevAll()
        let nextInstructor = activeInstructor.nextAll()

        prevInstructor.removeClass("next").addClass("prev")
        nextInstructor.removeClass("prev").addClass("next")  
    })
})
})