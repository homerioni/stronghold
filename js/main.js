'use strict'

$(document).ready(function () {

    // Q&A
    $('.qa__question').click(function () {
        $(this).toggleClass('open')
            .parent().find('.qa__answer').slideToggle();
    });

    // Blog
    $('.blog__category-btn').click(function () {
        $('.blog__category-btn').removeClass('active');
        $(this).addClass('active');
    });

});