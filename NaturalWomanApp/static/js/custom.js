function initialize_index(jQuery) {
    $("#i1").hide();
    $("#i2").hide();
    $("#i3").hide();
    $("#i4").hide();
    $("#i5").hide();
    $("#i6").hide();
    $("#i7").hide();

    $("#home_sliders").removeClass("hidden");

    $("#i1").delay(500).fadeIn(700, "linear");
    $("#i2").delay(1000).fadeIn(700, "linear");
    $("#i3").delay(1500).fadeIn(700, "linear");
    $("#i4").delay(2000).fadeIn(700, "linear");
    $("#i5").delay(2500).fadeIn(700, "linear");
    $("#i6").delay(3000).fadeIn(700, "linear");
    $("#i7").delay(3500).fadeIn(700, "linear");
}

function load_home_page(jQuery)
{
    $("#home_sliders").hide();
    $("#home_sliders").removeClass("hidden");
    $("#home_sliders").fadeIn(200);
}

function load_inherited_page(post_load) {
    var btn = "#btn" + post_load;
    $(btn).removeClass("nav-item");
    $(btn).addClass("active-item");
    $("#inherit-base").hide();
    $("#inherit-base").removeClass("hidden");
    $("#inherit-base").fadeIn(400);
}

function initialize(jQuery) {
    var post_load = String(document.getElementById("post_load").value);
    
    if (post_load === "-1")
    {
        initialize_index();
    }
    else if (post_load === "0")
    {
        load_home_page();
    }
    else if (post_load === "5")
    {
        load_inherited_page(post_load);
    }
    else
    {
        load_inherited_page(post_load);
    }
}

function removeHeight(index) {
    index = String(index);
    var hidden = document.getElementById("selected");
    var current = String(hidden.value);

    if (current !== div_name)
    {
        var old_div_name = "blog" + current;
        var div_name = "blog" + index;
        var label_name = "label" + index;
        var old_label_name = "label" + current;
        var label = document.getElementById(label_name);
        var old_label = document.getElementById(old_label_name);
        label.innerHTML = "<i class=\"far fa-check-circle\"></i>";
        old_label.innerHTML = "<i class=\"far fa-circle\"></i>";
        hidden.value = index;
        document.getElementById(div_name).classList.remove("bh");
        document.getElementById(old_div_name).className = "content-inner bh";
    }     
}



$( window ).on( "load", initialize);

$(document).ready(function() {
    $("#a1").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(200, function() {
                 window.location.href = "/about"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(400, function() {
                window.location.href = "/about"
            });
        }
    });

     $("#a2").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(200, function() {
                window.location.href = "/services"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(400, function() {
                window.location.href = "/services"
            });
        }
    });

     $("#a3").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(200, function() {
                window.location.href = "/gallery"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(400, function() {
                window.location.href = "/gallery"
            });
        }
    });

     $("#a4").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(200, function() {
                window.location.href = "/blog"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(400, function() {
                window.location.href = "/blog"
            });
        }
    });

     $("#a5").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(200, function() {
                window.location.href = "/contact"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(400, function() {
                window.location.href = "/contact"
            });
        }
    });

     $("#a0").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(function() {
                window.location.href = "/home"
            });
        }
        else
        {
            
        }
    });
});






