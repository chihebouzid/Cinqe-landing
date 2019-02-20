var delayInMilliseconds = 100;


//On Scroll Functionality
$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 100 ? $('#header-container').addClass('navShadow') : $('#header-container').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top', '60px') : $('ul').css('top', '80px');
});


//Click Logo To Scroll To Top
$('#logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});



//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
    e.preventDefault();
});



$('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('.menu-list').toggleClass('showMenu');
    setTimeout(function () {
        $('.menu-list').toggleClass('showMenuItems');
    }, delayInMilliseconds);


    $('li').on('click', () => {
        $('#menu-toggle').removeClass('closeMenu');
        $('.menu-list').removeClass('showMenu');
        setTimeout(function () {
            $('.menu-list').removeClass('showMenuItems');
        }, delayInMilliseconds);
    });

});



