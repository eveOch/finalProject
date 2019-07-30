
$('.slick-center').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if (currentSlide == "0")
    {
        $('header').css('backgroundColor', '');
        $('header li a').css('color', 'black');
        $('header span a').css('color', 'black');
        $('.slider-text a').css('color', 'black');
        $(".order img").attr("src","assets/cart.png");
    }
    else
    {
        $('header').css('backgroundColor', 'rgb(0,0,0, 0.5');
        $('header li a').css('color', 'white');
        $('header span a').css('color', 'white');
        $('.slider-text a').css('color', 'white');
        $(".order img").attr("src","assets/cart2.png");
    }
});
