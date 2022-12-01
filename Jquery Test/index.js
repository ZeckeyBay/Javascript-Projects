$(function(){
    $("#btn-fadein").click(function(){
        $(".box-red").fadeIn(3000);
        $(".box-blue").fadeIn(2000);
        $(".box-green").fadeIn(4000);
    })
    $("#btn-fadeout").click(function(){
        $(".box-red").fadeOut(3000);
        $(".box-blue").fadeOut(2000);
        $(".box-green").fadeOut(4000);
    })
    $("#btn-fadetoggle").click(function(){
        $(".box-red").fadeToggle(3000);
        $(".box-blue").fadeToggle(2000);
        $(".box-green").fadeToggle(4000);
    })
});

$(function(){
    $("#slide-down").click(function(){
        $(".slide-para").slideDown(1500);
    })
    $("#slide-up").click(function(){
        $(".slide-para").slideUp(1500);
    })
    $("#slide-toggle").click(function(){
        $(".slide-para").slideToggle(1500);
    })
});


$(function(){
    $(".open-popup").click(function(){
        $(".overlay").css({opacity:"1"});
        $(".modal").css("transform","scale(1)");
        $(".overlay").css("pointer-events","all");
        
    });
    $(".close-button").click(function(){
        $(".overlay").css({opacity:"0"});
        $(".modal").css("transform","scale(0)");
        $(".overlay").css("pointer-events","none");  
    });
    
    $(".overlay").click(function(){
        $(".overlay").css({opacity:"0"});
        $(".modal").css("transform","scale(0)");
        $(".overlay").css("pointer-events","none");
    });
    
})