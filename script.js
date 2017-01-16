//JavaScript

$(document).ready(function() {
    $(document).scroll(on_top);
    
    function on_top () {
        $('.on_top').fadeIn(3000, function () {
        $('.on_top').fadeOut(5000);
    });
    }
    
document.getElementById('musiclList').addEventListener('click', my);
document.getElementById('volumePlus').addEventListener('click', volumePlus);
document.getElementById('volumeMinus').addEventListener('click', volumeMinus);

function my () {
    var audio = document.getElementById('audio');
    audio.play();
    document.getElementById('musiclList').addEventListener('click', me);
}

function me () {
    var audio = document.getElementById('audio');
    audio.pause();
    document.getElementById('musiclList').removeEventListener('click', me);
}

function volumePlus () {
    document.getElementById('audio').volume+=0.1;
}

function volumeMinus () {
    document.getElementById('audio').volume-=0.1;
}

   $(".icoSkills").hover(function () {
       var temp = $(this).attr("alt"); 
       switch (temp) {
           case 'html5':
               $(".reflection").html("");
               $(".reflection").animate({width: "70%"},500);
               $(".reflection").html(temp + " >>> 70%");
               break;
           case 'css':
               $(".reflection").html("");
               $(".reflection").animate({width: "65%"},500);
               $(".reflection").html(temp + " >>> 65%");
               break;
           case 'js':
               $(".reflection").html("");
               $(".reflection").animate({width: "75%"},500);
               $(".reflection").html(temp + " >>> 75%");
               break;
           case 'bootstrap':
               $(".reflection").html("");
               $(".reflection").animate({width: "60%"},500);
               $(".reflection").html(temp + " >>> 60%");
               break;
           case 'jquery':
               $(".reflection").html("");
               $(".reflection").animate({width: "80%"},500);
               $(".reflection").html(temp + " >>> 80%");
               break;
           case 'ajax':
               $(".reflection").html("");
               $(".reflection").animate({width: "55%"},500);
               $(".reflection").html(temp + " >>> 55%");
               break;
           case 'angular':
               $(".reflection").html("");
               $(".reflection").animate({width: "50%"},500);
               $(".reflection").html(temp + " >>> 50%");
               break;
           case 'php':
               $(".reflection").html("");
               $(".reflection").animate({width: "45%"},500);
               $(".reflection").html(temp + " >>> 45%");
               break;
           case 'nodejs':
               $(".reflection").html("");
               $(".reflection").animate({width: "60%"},500);
               $(".reflection").html(temp + " >>> 60%");
               break;
           case 'sql':
               $(".reflection").html("");
               $(".reflection").animate({width: "40%"},500);
               $(".reflection").html(temp + " >>> 40%");
               break;
           default:
               // code
       }
   }, function () {
       $(".reflection").html("level of knowledge");
       $(".reflection").css("width","100%");
   });

});








