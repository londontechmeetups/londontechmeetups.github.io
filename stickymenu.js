$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 150) {
            $('nav').addClass('nav-scrolled');
        }
        else {
            $('nav').removeClass('nav-scrolled');
        }
    });
});
