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

$(function() {
    $('.fadeIn__bar__hundred').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('width', '100%');
            response(true);
        }
    });
});

$(function() {
    $('.fadeIn__bar__eighty').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('width', '80%');
            response(true);
        }
    });
});

$(function() {
    $('.fadeIn__bar__seventy').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('width', '70%');
            response(true);
        }
    });
});

$(function() {
    $('.fadeIn__bar__fifty').lazy({
        threshold: 0,
        show: function(element, response) {
            element.css('opacity', 1);
            element.css('width', '50%');
            response(true);
        }
    });
});