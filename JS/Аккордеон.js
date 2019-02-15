
function accordeonFooter () {
    var $title = $('.footer-widgets__pages-title');
    var $cont = $('.footer-widgets__pages-content');
    $title.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('active-title')) {
            $cont.slideUp();
            $title.removeClass('active-title');
        }
        $this.next('.footer-widgets__pages-content').slideToggle();
        $this.toggleClass('active-title');
    });
}