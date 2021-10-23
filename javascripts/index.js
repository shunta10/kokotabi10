var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.container_header').addClass('hide');
    } else {
        $('.container_header').removeClass('hide');
    }
    startPos = winScrollTop;
});