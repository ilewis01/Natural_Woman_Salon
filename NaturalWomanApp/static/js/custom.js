function initialize_index( jQuery ) {
    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
    $("#i4").hide();
    $("#i5").hide();
    $("#i6").hide();
    $("#i7").hide();
    // $("#motto").hide();
    $("#animatedBrand").hide();

    $("#i1").removeClass("hidden");
    $("#i2").removeClass("hidden");
    $("#i3").removeClass("hidden");
    $("#i4").removeClass("hidden");
    $("#i5").removeClass("hidden");
    $("#i6").removeClass("hidden");
    $("#i7").removeClass("hidden");
    // $("#motto").removeClass("hidden");
    $("#animatedBrand").removeClass("hidden");

    $("#i1").delay(500).fadeIn(700, "linear");
    $("#i2").delay(1000).fadeIn(700, "linear");
    $("#i3").delay(1500).fadeIn(700, "linear");
    $("#i4").delay(2000).fadeIn(700, "linear");
    $("#i5").delay(2500).fadeIn(700, "linear");
    $("#i6").delay(3000).fadeIn(700, "linear");
    $("#i7").delay(3500).fadeIn(700, "linear");

    // $("#animatedBrand").delay(4000).fadeIn(1400, "swing");
    // $("#motto").delay(4000).fadeIn(1400, "swing");
}

$( window ).on( "load", initialize_index );

$(document).ready(function(){
    $("#login-open").click(function(){
        $("#login-fader").fadeIn();
        $("#login-form").fadeIn();
    });

    $("#cancel-login").click(function(){
        $("#login-form").fadeOut();
        $("#login-fader").fadeOut();
        $("#username").val("");
        $("#password").val("");
    });
});