
$(document).ready(function() {
    $('#button_about_me').click(function() {
        $('#about_me').show();
        $('.background').css('opacity','0.5');
        $('#about_me').animate({top: '200px', left: '300px',  width: '700px', height: '390px'}, 'slow');
        $('.name').show('slow');
        $('.goal').show('slow');
    });
});

$(document).ready(function(){
    $('#button_about_me_close').click(function() {
        $('#about_me').animate({top: '100px', left: '200px',  width: '0px', height: '0px'}, 'fast');
        $('#about_me').hide();
        $('.name, .goal').hide();
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
        $('#javascript').html('javaScript');
        $('#jQuery').animate({width: '200px'}, 'slow');
        $('#jQuery').html('jQuery');
        $('#bootstrap').animate({width: '200px'}, 'slow');
        $('#bootstrap').html('bootstrap');
    });
})