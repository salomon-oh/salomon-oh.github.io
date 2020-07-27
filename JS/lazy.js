$(function() {
    $('.fadeLeft').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('transform', 'translateX('+0+')');
            response(true);
        }
    });
});

$(function() {
    $('.fadeIn').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            response(true);
        }
    });
});

$(function() {
    $('.fadeDown').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('transform', 'translateY('+0+')');
            response(true);
        }
    });
});