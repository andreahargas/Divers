$(function(){

    console.log($(".destinations-item-hidden:first"));

    // OPEN SIDE MENU //
    $(".menu-btn").on("click", function(){
        $(".menu-icon, .navbar-nav").toggleClass("open");
        $(".search-menu, .search-icon, .language-menu, .contact-icon, .contact-menu").removeClass("open");
    });

    // OPEN SIDE MENU SUBMENUS //
    $(".nav-link").each(function(){

        $(this).on("click", function(){
            $(".nav-link, .nested-links, .nav-link i").not(this).not($(this).parent().children("ul")).not($(this).children("i")).removeClass("open")

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

    // START SLIDE ANIMATION AUTOMATICALLY //
    function moveToLeft(){
        
        $(".header-slider-button").removeClass("active")
        $(".header-slider-button").eq(0).addClass("active")

        $(".sides").removeClass("active");      
        $(".sides").eq(0).addClass("active").removeClass("prev next");

        let activeSide = $(".sides.active");
        let prevSide = activeSide.prev()
        let nextSide = activeSide.next()
    
        prevSide.removeClass("next").addClass("prev")
        nextSide.removeClass("prev").addClass("next")  

        // ADD TEXT ANIMATION //
        $(".header-title, .header-description, .read-more-btn").addClass("animation")

        setTimeout(function() {
            $(".header-title, .header-description, .read-more-btn").removeClass("animation");
            }, 1700);

    }

    function moveToRight(){
        
        $(".header-slider-button").removeClass("active")
        $(".header-slider-button").eq(1).addClass("active")

        $(".sides").removeClass("active");      
        $(".sides").eq(1).addClass("active").removeClass("prev next");

        let activeSide = $(".sides.active");
        let prevSide = activeSide.prev()
        let nextSide = activeSide.next()
    
        prevSide.removeClass("next").addClass("prev")
        nextSide.removeClass("prev").addClass("next") 
        
        // ADD TEXT ANIMATION //
        $(".header-title, .header-description, .read-more-btn").addClass("animation")

        setTimeout(function() {
            $(".header-title, .header-description, .read-more-btn").removeClass("animation");
            }, 1700); 
    }

    let right = setInterval(moveToRight, 6000);
    let left = setInterval(moveToLeft, 12000);


    // CHANGE SLIDE MANUALLY //  
    $(".header-slider-button").each(function(){

        $(this).on("click", function(){

            clearInterval(right);
            clearInterval(left);   
    
            let activeButton = $(this);
        
            $(".header-slider-button").removeClass("active")
            activeButton.addClass("active");     
    
            $(".sides").removeClass("active");      
            $(".sides").eq(activeButton.index()).addClass("active").removeClass("prev next");
    
            let activeSide = $(".sides.active");
            let prevSide = activeSide.prev()
            let nextSide = activeSide.next()
    
            prevSide.removeClass("next").addClass("prev")
            nextSide.removeClass("prev").addClass("next")  

            // ADD TEXT ANIMATION //
            $(".header-title, .header-description, .read-more-btn").addClass("animation")

            setTimeout(function() {
                $(".header-title, .header-description, .read-more-btn").removeClass("animation");
                }, 1700);
        })
    })

    
})











