function initialize_index(jQuery) {
    $("#btn0").removeClass("nav-item");
    $("#btn0").addClass("active-item");

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
    var post_load = String(document.getElementById('post_load').value);
    var btn = "#btn" + post_load;
    $(btn).removeClass("nav-item");
    $(btn).addClass("active-item");
    $("#home_sliders").hide();
    $("#home_sliders").removeClass("hidden");
    $("#home_sliders").fadeIn(500);
}

function load_inherited_page(post_load) {
    var btn = "#btn" + post_load;
    $(btn).removeClass("nav-item");
    $(btn).addClass("active-item");
    $("#inherit-base").hide();
    $("#inherit-base").removeClass("hidden");
    $("#inherit-base").fadeIn(500);
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
    else if (post_load === "2")
    {
         $("#alert").fadeOut();
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

    if (current !== index)
    {
        var p_id = "p" + index;
        var old_p_id = "p" + current;
        var old_div_name = "blog" + current;
        var div_name = "blog" + index;
        var label_name = "label" + index;
        var old_label_name = "label" + current;
        var label = document.getElementById(label_name);
        var old_label = document.getElementById(old_label_name);
        label.innerHTML = "<i class=\"far fa-check-circle icon-active label_lg id=\"" + p_id + "\"></i>";
        old_label.innerHTML = "<i class=\"far fa-circle label_sm id=\"" + old_p_id + "\"></i>";
        hidden.value = index;
        document.getElementById(p_id).className = "fas fa-play flip arrow-iel tan_play";
        document.getElementById(old_p_id).className = "fas fa-play flip arrow-iel olive_play";
        document.getElementById(div_name).classList.remove("bh");
        document.getElementById(old_div_name).className = "content-inner bh";

        if (index === "0")
        {
            document.getElementById('label0').className = "top-cover";
        }
        else
        {
            document.getElementById('label0').className = "top-raise";
        }

        var num_entries = String(document.getElementById("num_entries").value)

        if (index === num_entries) 
        {
            document.getElementById('label' + num_entries).className = "bottom-cover";
        }
        else
        {
            document.getElementById('label0').className = "top-raise";
        }
    }     
}

function load_service_description(product_id)
{
    product_id = String(product_id);
    $("#alert").removeClass("hidden");
    $("#alert").fadeIn(500);
}

function load_blog_entry(index) {
    index = String(index);
    var radio_name = "e" + index;
    var radio = document.getElementById(radio_name);
    radio.click();
    removeHeight(index);
}



$( window ).on( "load", initialize);

$(document).ready(function() {
    $("#a1").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                 window.location.href = "/about"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/about"
            });
        }
    });

     $("#a2").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/services"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/services"
            });
        }
    });

     $("#a3").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/gallery"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/gallery"
            });
        }
    });

     $("#a4").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/blog"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/blog"
            });
        }
    });

     $("#a5").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/contact"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
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

     $("#a-1").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(function() {
                window.location.href = "/"
            });
        }
    });

     $("#close-this").click(function() {
        $("#alert").fadeOut(500);
    });
});






