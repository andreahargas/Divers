$(function(){

// SLIDER //
$(".blog-slider-button").each(function(){

    $(this).on("click", function(){

        let activeButton = $(this);
    
        $(".blog-slider-button").removeClass("active")
        activeButton.addClass("active");     

        $(".blog-item").removeClass("active");      
        $(".blog-item").eq(activeButton.index()).addClass("active").removeClass("prev next");

        let activeBlog = $(".blog-item.active");
        let prevBlog = activeBlog.prevAll()
        let nextBlog = activeBlog.nextAll()

        prevBlog.removeClass("next").addClass("prev")
        nextBlog.removeClass("prev").addClass("next")  
    })
})
})