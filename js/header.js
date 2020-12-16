$(function(){


    // OPEN SIDE MENU //
    $(".menu-btn").on("click", function(){
        $(".menu-icon, .navbar-nav").toggleClass("open");
        $(".search-menu, .search-icon, .language-menu, .contact-icon, .contact-menu").removeClass("open");
    });

    // SIDE MENU SUBMENUS //
    $(".nav-link").each(function(){

        $(this).on("click", function(){
            $(this).parent().children("ul").toggleClass("open");
            $(this).children("i").toggleClass("open");
            $(this).toggleClass("open");        
        })
    });

    // OPEN SEARCH MENU //
    $(".search-icon").on("click", function(){
        $(this).toggleClass("open");
        $(".search-menu").toggleClass("open");
        $(".navbar-nav, .menu-icon, .language-menu, .contact-icon, .contact-menu").removeClass("open");
    });

    // OPEN LANGUAGE MENU //
    $(".language-icon").on("click", function(){
        $(".language-menu").toggleClass("open");
        $(".search-menu, .search-icon, .navbar-nav, .menu-icon, .contact-icon, .contact-menu").removeClass("open");
    });

    // SELECT A LANGUAGE //
    $(".language").each(function(){
        $(this).on("click", function(){
            $(".language-icon").html($(this).text());
            $(".language").removeClass("active");
            $(this).addClass("active");
            $(".language-menu").removeClass("open")            
        })
    });

    // OPEN CONTACT MENU //
    $(".contact-btn").on("click",function(){
        $(".contact-icon, .contact-menu").toggleClass("open");
        $(".navbar-nav, .menu-icon, .search-icon, .search-menu, .language-menu").removeClass("open");
    });


    // CHANGE SLIDE //
    $(".slider-button-right").on("click", function(){

        $(".header-slider")
        .removeClass("left")
        .addClass("right");
        $(".slider-button-left").removeClass("active");
        $(this).addClass("active");
        $(".header-title, .header-description, .read-more-btn").addClass("animation")

        setTimeout(function() {
            $(".header-title").removeClass("animation");
          }, 1500);
        setTimeout(function() {
            $(".header-description").removeClass("animation");
            }, 1600);
            
        setTimeout(function() {
            $(".read-more-btn").removeClass("animation");
            }, 1700);
    });

    $(".slider-button-left").on("click", function(){
        $(".header-slider")
        .removeClass("right")
        .addClass("left");
        $(".slider-button-right").removeClass("active");
        $(this).addClass("active");
        $(".header-title, .header-description, .read-more-btn").removeClass("animation").addClass("animation")

        setTimeout(function() {
            $(".header-title").removeClass("animation");
          }, 1500);
        setTimeout(function() {
            $(".header-description").removeClass("animation");
            }, 1600);
            
        setTimeout(function() {
            $(".read-more-btn").removeClass("animation");
            }, 1700);
    })

    

});











