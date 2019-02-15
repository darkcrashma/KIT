$('.logo').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() <= '768') {
        $(this).toggleClass("logo--active");
        $('.nav-menu').toggleClass('nav-menu--active');
        $('body, html').toggleClass('overflowHidden');
    }
});