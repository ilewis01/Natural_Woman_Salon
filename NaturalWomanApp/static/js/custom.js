function initialize_index(jQuery) {
    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
    $("#i4").hide();
    $("#i5").hide();
    $("#i6").hide();
    $("#i7").hide();

    $("#i1").removeClass("hidden");
    $("#i2").removeClass("hidden");
    $("#i3").removeClass("hidden");
    $("#i4").removeClass("hidden");
    $("#i5").removeClass("hidden");
    $("#i6").removeClass("hidden");
    $("#i7").removeClass("hidden");

    $("#i1").delay(500).fadeIn(700, "linear");
    $("#i2").delay(1000).fadeIn(700, "linear");
    $("#i3").delay(1500).fadeIn(700, "linear");
    $("#i4").delay(2000).fadeIn(700, "linear");
    $("#i5").delay(2500).fadeIn(700, "linear");
    $("#i6").delay(3000).fadeIn(700, "linear");
    $("#i7").delay(3500).fadeIn(700, "linear");
}

function load_inherited_page(post_load) {
    var btn = "#btn" + post_load;
    $(btn).removeClass("nav-item");
    $(btn).addClass("active-item");
    $("#inherit-base").hide();
    $("#inherit-base").removeClass("hidden");
    $("#inherit-base").fadeIn();
}

function initialize(jQuery) {
    var post_load = String(document.getElementById("post_load").value);
    
    if (post_load === "-1")
    {
        initialize_index();
    }
    else if (post_load === 0)
    {
        initialize_index();
    }
    else
    {
        load_inherited_page(post_load);
    }
}

$( window ).on( "load", initialize);

$(document).ready(function() {
    $("#a1").click(function() {
        $( "#inherit-base" ).fadeOut(function() {
             window.location.href = "/about"
        });
    });

     $("#a2").click(function() {
        $( "#inherit-base" ).fadeOut(function() {
            window.location.href = "/services"
        });
    });

     $("#a3").click(function() {
        $( "#inherit-base" ).fadeOut(function() {
            window.location.href = "/gallery"
        });
    });

     $("#a4").click(function() {
        $( "#inherit-base" ).fadeOut(function() {
            window.location.href = "/blog"
        });
    });

     $("#a5").click(function() {
        $( "#inherit-base" ).fadeOut(function() {
            window.location.href = "/contact"
        });
    });
});






