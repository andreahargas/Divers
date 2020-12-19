// SLIDER //
$(".divers-slider-button-left").on("click", function(){
    $(".divers-img-left").addClass("show").removeClass("hide");
    $(".divers-img-right, .divers-img-middle").removeClass("show")

    $(".divers-slider-button-right, .divers-slider-button-middle").removeClass("active");
    $(this).addClass("active");
})


$(".divers-slider-button-middle").on("click", function(){
    $(".divers-img-middle").addClass("show");
    $(".divers-img-right, .divers-img-left").removeClass("show");
    $(".divers-img-left").addClass("hide");

    $(".divers-slider-button-left, .divers-slider-button-right").removeClass("active");
    $(this).addClass("active");
})


$(".divers-slider-button-right").on("click", function(){
    $(".divers-img-right").addClass("show");
    $(".divers-img-left, .divers-img-middle").removeClass("show");
    $(".divers-img-left").addClass("hide");

    $(".divers-slider-button-left, .divers-slider-button-middle").removeClass("active");
    $(this).addClass("active");
})


// OPEN TEXT //
$(".divers-description-categories i").each(function(){
    $(this).on("click", function(){
        $(".divers-description-categories i, .divers-description-item p").not(this).not($(this).parent().siblings("p")).removeClass("open"); 

        $(this).toggleClass("open");
        $(this).parent().siblings("p").toggleClass("open"); 

        if($(".divers-description-categories i:last").hasClass("open")){
            $(".divers-description-categories:last").removeClass("border-0")
        } else{
            $(".divers-description-categories:last").addClass("border-0")
        }
    })
    
})
// END OF OPEN TEXT //
