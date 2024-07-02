$(document).ready(function () {
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        var index = $('.carousel-item.active').index();
        $('.itemcarousel').removeClass('active');
        $('.itemcarousel').eq(index).addClass('active');
    });

    $('.itemcarousel').click(function () {
        $('.itemcarousel').removeClass('active');
        $(this).addClass('active');
    });
});