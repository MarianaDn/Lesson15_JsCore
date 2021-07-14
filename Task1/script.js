$(document).ready(function () {
    $('.block').animate({
        width: '240px',
        height: '527px',
        backgroundColor: 'rgb(0, 0, 0)'
    }).slideDown(60000, function () {
        $('.numberMin').html($('.numberMin').text() - 1);
    }).slideUp(60000, function () {
        $('.numberMin').html($('.numberMin').text() - 1);
        $('.block').css({
            display: 'block',
            backgroundColor: 'rgb(8, 189, 39)'
        });
    })
})