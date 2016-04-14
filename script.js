
$(document).ready(function() {
    $('#button_about_me').click(function() {
        $('#about_me').show();
        $('.background').css('opacity','0.1');
        $('#about_me').animate({top: '100px', left: '200px',  width: '900px', height: '700px'}, 'slow');
        $('.name').show('slow');
    });
});

$(document).ready(function() {
    $('#button_useful_links').click(function() {
        $('#useful_links').show();
        $('.background').css('opacity','0.1');
        $('#useful_links').animate({top: '100px', left: '200px',  width: '900px', height: '700px'}, 'slow');
        $('#often').show('slow');
    });
});

$(document).ready(function(){
    $('#button_about_me_close').click(function() {
        $('#about_me').animate({top: '100px', left: '200px',  width: '0px', height: '0px'}, 'fast');
        $('#about_me').hide();
        $('.name').hide();
        $('#html, #css, #javascript, #jQuery, #bootstrap').css('width','0%');
        $('#html, #css, #javascript, #jQuery, #bootstrap').html('');
        $('.background').css('opacity','1');
    });
});    

$(document).ready(function(){
    $('#button_useful_links_close').click(function() {
        $('#useful_links').animate({top: '500px', left: '1000px',  width: '0px', height: '0px'}, 'fast');
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
    });
})

