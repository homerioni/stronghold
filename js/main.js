'use strict'

$(document).ready(function () {

    // Q&A
    $('.qa__question').click(function () {
        $(this).toggleClass('open')
            .parent().find('.qa__answer').slideToggle();
    });

});