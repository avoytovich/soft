
$(document).ready(function() {
    $('#button_about_me').click(function() {
        $('#about_me').show();
        $('.background').css('opacity','0.3');
        $('#about_me').animate({top: '400px', left: '200px',  width: '900px', height: '700px'}, 'slow');
        $('.name').show('slow');
        $(".p_one").fadeIn('slow');
        $(".p_two").fadeIn(1000);
        $(".p_tree").fadeIn(2000);
        $(".p_four").fadeIn(3000);
        $(".p_five").fadeIn(4000);
        $(".p_six").fadeIn(5000);
        $(".p_seven").fadeIn(6000);
    });
});

$(document).ready(function() {
    $('#button_useful_links').click(function() {
        $('#useful_links').show();
        $('.background').css('opacity','0.3');
        $('#useful_links').animate({top: '400px', left: '200px',  width: '900px', height: '700px'}, 'slow');
        $('#often').show('slow');
    });
});

$(document).ready(function(){
    $('#button_about_me_close').click(function() {
        $('#about_me').animate({top: '400px', left: '200px',  width: '0px', height: '0px'}, 'fast');
        $('#about_me').hide();
        $('.name').hide();
        $('#html, #css, #javascript, #jQuery, #bootstrap').css('width','0%');
        $('#html, #css, #javascript, #jQuery, #bootstrap').html('');
        $('.background').css('opacity','1');
        $('.p_one, .p_two, .p_tree, .p_four, .p_five, .p_six, .p_seven').fadeOut('fast');
    });
});    

$(document).ready(function(){
    $('#button_useful_links_close').click(function() {
        $('#useful_links').animate({top: '500px', left: '200px',  width: '0px', height: '0px'}, 'fast');
        $('#useful_links').hide();
        $('#html, #css, #javascript, #jQuery, #bootstrap').css('width','0%');
        $('#html, #css, #javascript, #jQuery, #bootstrap').html('');
        $('.background').css('opacity','1');
    });
});

$(document).ready(function() {
    $('.skills').click(function() {
        $('#html').animate({width: '300px'}, 'slow');
        $('#html').html('HTML');
        $('#css').animate({width: '250px'}, 'slow');
        $('#css').html('CSS');
        $('#javascript').animate({width: '200px'}, 'slow');
        $('#javascript').html('JavaScript');
        $('#jQuery').animate({width: '200px'}, 'slow');
        $('#jQuery').html('jQuery');
        $('#bootstrap').animate({width: '200px'}, 'slow');
        $('#bootstrap').html('Bootstrap');
        $(".start_up").slideToggle(10000);
    });
});

$(function () {
    var pic = $('.pictures');
    var backgrounds = [
      'url(images/bike.jpg)', 
      'url(images/board.jpg)', 
      'url(images/Certificate.jpg)', 
      'url(images/contact.jpg)', 
      'url(images/group.jpg)', 
      'url(images/hand.jpg)', 
      'url(images/heart.jpg)', 
      'url(images/icon.jpg)', 
      'url(images/marketing.jpg)', 
      'url(images/objectives.jpg)', 
      'url(images/programming.jpg)', 
      'url(images/seo.jpg)'];
    var current = 0;

    function nextBackground() {
        pic.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});








