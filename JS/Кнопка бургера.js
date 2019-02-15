$(document).ready( function() {

    $('.gamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("gamburger--active");
        $('.headerMenu').toggleClass('headerMenu--active');
        $('body, html').toggleClass('overflowHidden');
    });

});