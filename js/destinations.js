// CHANGE SLIDE //
$(".destinations-slider-button-left").on("click", function(){
    $(".destinations-items-container")
    .removeClass("middle")
    .removeClass("right")
    .addClass("left")

    $(".destinations-slider-button-right, .destinations-slider-button-middle").removeClass("active");
    $(this).addClass("active");
})


$(".destinations-slider-button-middle").on("click", function(){
    $(".destinations-items-container")
    .removeClass("left")
    .removeClass("right")
    .addClass("middle")

    $(".destinations-slider-button-left, .destinations-slider-button-right").removeClass("active");
    $(this).addClass("active");
})


$(".destinations-slider-button-right").on("click", function(){
    $(".destinations-items-container")
    .removeClass("left")
    .removeClass("middle")
    .addClass("right")

    $(".destinations-slider-button-left, .destinations-slider-button-middle").removeClass("active");
    $(this).addClass("active");
})