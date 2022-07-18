'use strict'

$(document).ready(function () {

    // mask
    $('.input-phone').mask('+7 (999) 999-99-99');


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

    // modal-contacts
    $('.modal-contacts').css('display', 'flex').hide();
    $('.modal-contacts__content').css('display', 'flex').hide();
    $('.contacts-btn').click(function () {
        $('body').addClass('lock');
        $('.modal-contacts').fadeIn();
        $('.modal-contacts__content').slideDown(300);
    });
    $('.modal-contacts__bg').click(function () {
        $('body').removeClass('lock');
        $('.modal-contacts').hide();
        $('.modal-contacts__content').hide();
    });

});