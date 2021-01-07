$(function(){

    // SLIDER //
    $(".divers-slider-button").each(function(){

        $(this).on("click", function(){

            let activeButton = $(this);
        
            $(".divers-slider-button").removeClass("active");
            activeButton.addClass("active");     

            $(".divers-img").removeClass("active");      
            $(".divers-img").eq(activeButton.index()).addClass("active").removeClass("hide");
            $(".divers-img").not($(".divers-img.active")).addClass("hide");      
        });
    });

    // OPEN TEXT //
    $(".divers-menu-categories i").each(function(){
        $(this).on("click", function(){
            $(".divers-menu-categories i, .divers-menu-item p").not(this).not($(this).parent().siblings("p")).removeClass("open"); 

            $(this).toggleClass("open");
            $(this).parent().siblings("p").toggleClass("open"); 

            if($(".divers-menu-categories i:last").hasClass("open")){
                $(".divers-menu-categories:last").removeClass("border-0")
            } else{
                $(".divers-menu-categories:last").addClass("border-0")
            }
        });
        
    });
});