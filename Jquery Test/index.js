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

    $("#email").keyup(function(){
        if(validateEmail()){
            $("#email").css("border","2px solid green");
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        } else {
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Un-Validated</p>"); 
        }
        buttonState();
    })

    $("#password").keyup(function(){
        if(validatePassword()){
            $("#password").css("border","2px solid green");
            $("#passMsg").html("<p class='text-success'>Password Validated</p>");
        } else {
            $("#password").css("border","2px solid red");
            $("#passMsg").html("<p class='text-danger'>Password not Valid</p>"); 
        }
        buttonState();
    })

    $(".submit-btn").hide();
})

function validateEmail(){
    //get value of input mail
    let email=$("#email").val();
    //regular expression
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\+)*\.\w+([-.]\w+)*$/
    if(reg.test(email)){
        return true;
    } else{
        return false;
    }
}

function validatePassword(){
    let pass=$("#password").val();
    if(pass.length >7){
        return true;
    } else {
        return false;
    }
};

function buttonState(){
    if(validateEmail() && validatePassword()){
        $(".submit-btn").show();
    } else {
        $(".submit-btn").hide();
    }
};