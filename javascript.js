$(window).scroll(function scroll(){

    if ($(window).scrollTop() > 50){
        $('h2').addClass('onScroll_h2');
        // $('li').addClass('onScroll_li');
    } else{
        $('h2').removeClass('onScroll_h2');
        // $('li').removeClass('onScroll_li');
    }
});