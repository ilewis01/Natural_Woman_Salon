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
    $("#alert").hide();

    $("#home_sliders").removeClass("hidden");
    $("#alert").removeClass("hidden");

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
    else if (post_load === "3")
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

function clear_blog()
{
    if ($("#blog-content").val().length || $("#blog-subject").val())
    {
        $("#blog-content").val("");
        $("#blog-subject").val("");
    }
}

function master_closer()
{
    $("#alert").fadeOut(500);
}

function post_new_blog()
{
    alert("Posting Blog");
    $("#alert").fadeOut(500);
}

function init_image_upload()
{
    alert("Uploading Image...");
    $("#alert").fadeOut(500);
}

function build_new_blog()
{
    var html = "<div class=\"new_blog_container vert-center background_gn\"> ";
    html += "<div class=\"full_w\"> ";
    html += "<div class=\"login-leaf-all\"><i class=\"fab fa-envira flip\"></i></div> ";
    html += "<div class=\"lovely_header\">new blog post</div></div> ";
    html += "<form action=\"\" method=\"\" id=\"master_form\"> ";
    html += "<input type=\"text\" name=\"blog-subject\" id=\"blog-subject\" placeholder=\"Subject\" required> ";
    html += "<div class=\"blog-text-container\"> ";
    html += "<textarea name=\"blog-content\" id=\"blog-content\" required></textarea></div></form> ";
    html += "<div class=\"full_w\"> ";
    html += "<div class=\"master_button_holder_right\"> ";
    html += "<button onClick=\"javascript: post_new_blog();\">Post</button> ";
    html += "<button onClick=\"javascript: clear_blog();\">Clear</button> ";
    html += "<button onClick=\"javascript: master_closer();\">Cancel</button></div></div></div> ";
    return html;
}


function build_new_image()
{
    var html = "<div class=\"pix_form  pop_up_properties vert-center background_gn\"> ";
    html += "<div class=\"full_w\">";
    html += "<div class=\"login-leaf-all\"><i class=\"fab fa-envira flip\"></i></div> ";
    html += "<div class=\"lovely_header\">Upload Photo</div> </div> ";
    html += " <form action=\"\" method=\"\" id=\"master_form\">";
    html += "<input type=\"file\" name=\"image\" id=\"image\" class=\"fix-btn1\"></form> ";
    html += "<div class=\"full_w\"> <div class=\"master_button_holder_double\">";
    html += "<button onClick=\"javascript: init_image_upload();\">Upload</button>&nbsp";
    html += "<button onClick=\"javascript: master_closer();\">cancel</button> </div> </div> </div>";
    return html;
}

function load_frame(alert_type)
{
    var html = "";
    alert_type = String(alert_type);

    if (alert_type === "new_blog")
    {
        html = build_new_blog();
    }
    else if (alert_type === "new_pix")
    {
        html = build_new_image();
    }

    if (html.length)
    {
        $("#alert").hide();
        $("#alert").removeClass("hidden");
        $("#alert").html(html);
        $("#alert").fadeIn(500);
    }
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

     $("#a6").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/tools"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/tools"
            });
        }
    });

     $("#a7").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/admin"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/admin"
            });
        }
    });

    $("#a8").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/account"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/account"
            });
        }
    });

    $("#a9").click(function() {
        if ($("#inherit-base" ).length)
        {
            $( "#inherit-base" ).fadeOut(500, function() {
                window.location.href = "/logout"
            });
        }
        else
        {
            $( "#home_sliders" ).fadeOut(500, function() {
                window.location.href = "/logout"
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

    $("#motto").click(function() {
        $("#alert").fadeIn(500);
    });

    $("#login-btn").click(function() {
        $("#alert").fadeOut(500);
        $( "#home_sliders" ).fadeOut(500, function() {
            window.location.href = "/tools"
        });
    });

     $("#item1").mouseenter(function() {
        if ($("#tools-page").length)
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "Create a new blog entry";

            $("#ph1").hide();
            $("#ph1").addClass("t-message");
            $("#ph1").removeClass("hidden");
            $("#ph1").html(html);
            $("#ph1").delay(100).slideDown(400);
        }
        else
        {
            $("#ph1").hide();
            $("#ph1").removeClass("hidden");
            $("#ph1").addClass("p-message");
            $("#ph1").html("click for details!");
            $("#ph1").delay(100).slideDown(400);
        }
    });

    $("#item1").mouseleave(function() {
        $("#ph1").slideUp(500);
    });

     $("#item2").mouseenter(function() {
        if ($("#tools-page").length)
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "Edit previous blog entries";

            $("#ph2").hide();
            $("#ph2").removeClass("hidden");
            $("#ph2").addClass("t-message");
            $("#ph2").html(html);
            $("#ph2").delay(100).slideDown(400);
        }
        else 
        {
            $("#ph2").hide();
            $("#ph2").removeClass("hidden");
            $("#ph2").addClass("p-message");
            $("#ph2").html("click for details!");
            $("#ph2").delay(100).slideDown(400);
        }
    });

    $("#item2").mouseleave(function() {
        $("#ph2").slideUp(500);
    });

    $("#item3").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "update product prices";

            $("#ph3").hide();
            $("#ph3").removeClass("hidden");
            $("#ph3").addClass("t-message");
            $("#ph3").html(html);
            $("#ph3").delay(100).slideDown(400);
        }
        else
        {
            $("#ph3").hide();
            $("#ph3").removeClass("hidden");
            $("#ph3").addClass("p-message");
            $("#ph3").html("click for details!");
            $("#ph3").delay(100).slideDown(400);
        }
    });

    $("#item3").mouseleave(function() {
        $("#ph3").slideUp(500);
    });

    $("#item4").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "update product details";

            $("#ph4").hide();
            $("#ph4").removeClass("hidden");
            $("#ph4").addClass("t-message");
            $("#ph4").html(html);
            $("#ph4").delay(100).slideDown(400);
        }
        else
        {
            $("#ph4").hide();
            $("#ph4").removeClass("hidden");
            $("#ph4").addClass("p-message");
            $("#ph4").html("click for details!");
            $("#ph4").delay(100).slideDown(400);
        }
        });

    $("#item4").mouseleave(function() {
        $("#ph4").slideUp(500);
    });

    $("#item5").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "upload new images";

            $("#ph5").hide();
            $("#ph5").removeClass("hidden");
            $("#ph5").addClass("t-message");
            $("#ph5").html(html);
            $("#ph5").delay(100).slideDown(400);
        }
        else
        {
            $("#ph5").hide();
            $("#ph5").removeClass("hidden");
            $("#ph5").addClass("p-message");
            $("#ph5").html("click for details!");
            $("#ph5").delay(100).slideDown(400);
        }
    });

    $("#item5").mouseleave(function() {
        $("#ph5").slideUp(500);
    });

     $("#item6").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "edit photo gallery";

            $("#ph6").hide();
            $("#ph6").removeClass("hidden");
            $("#ph6").addClass("t-message");
            $("#ph6").html(html);
            $("#ph6").delay(100).slideDown(400);
        }
        else
        {
            $("#ph6").hide();
            $("#ph6").removeClass("hidden");
            $("#ph6").addClass("p-message");
            $("#ph6").html("click for details!");
            $("#ph6").delay(100).slideDown(400);
        }
    });

     $("#item6").mouseleave(function() {
        $("#ph6").slideUp(500);
    });

     $("#item7").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "update the about write-up";

            $("#ph7").hide();
            $("#ph7").removeClass("hidden");
            $("#ph7").addClass("t-message");
            $("#ph7").html(html);
            $("#ph7").delay(100).slideDown(400);
        }
        else
        {
            $("#ph7").hide();
            $("#ph7").removeClass("hidden");
            $("#ph7").addClass("p-message");
            $("#ph7").html("click for details!");
            $("#ph7").delay(100).slideDown(400);
        }
    });

     $("#item7").mouseleave(function() {
        $("#ph7").slideUp(500);
    });

     $("#item8").mouseenter(function() {
        if ($("#tools-page").length) 
        {
            var html ="<div class=\"center-leaf\" id=\"center-leaf\"><i class=\"fab fa-envira\"></i></div>";
            html += "manage your email";

            $("#ph8").hide();
            $("#ph8").removeClass("hidden");
            $("#ph8").addClass("t-message");
            $("#ph8").html(html);
            $("#ph8").delay(100).slideDown(400);
        }
        else
        {
            $("#ph8").hide();
            $("#ph8").removeClass("hidden");
            $("#ph8").addClass("p-message");
            $("#ph8").html("click for details!");
            $("#ph8").delay(100).slideDown(400);
        }
    });

     $("#item8").mouseleave(function() {
        $("#ph8").slideUp(500);
    });

     $("#item9").mouseenter(function() {
        $("#ph9").hide();
        $("#ph9").removeClass("hidden");
        $("#ph9").addClass("p-message");
        $("#ph9").html("click for details!");
        $("#ph9").delay(100).slideDown(400);
    });

     $("#item9").mouseleave(function() {
        $("#ph9").slideUp(500);
    });

     $("#item10").mouseenter(function() {
        $("#ph10").hide();
        $("#ph10").removeClass("hidden");
        $("#ph10").addClass("p-message");
        $("#ph10").html("click for details!");
        $("#ph10").delay(100).slideDown(400);
    });

     $("#item10").mouseleave(function() {
        $("#ph10").slideUp(500);
    });

     $("#item11").mouseenter(function() {
        $("#ph11").hide();
        $("#ph11").removeClass("hidden");
        $("#ph11").addClass("p-message");
        $("#ph11").html("click for details!");
        $("#ph11").delay(100).slideDown(400);
    });

     $("#item11").mouseleave(function() {
        $("#ph11").slideUp(500);
    });

     $("#item12").mouseenter(function() {
        $("#ph12").hide();
        $("#ph12").removeClass("hidden");
        $("#ph12").addClass("p-message");
        $("#ph12").html("click for details!");
        $("#ph12").delay(100).slideDown(400);
    });

     $("#item12").mouseleave(function() {
        $("#ph12").slideUp(500);
    });
});
























