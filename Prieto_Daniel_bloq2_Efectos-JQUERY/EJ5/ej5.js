$(document).ready(function() {
    var cube = $("#cube");
    cube.animate({left: '+=100px'}, 1000)
        .queue(function(next) {
        $(this).css({'background-color': 'red'});
        next();
        })
        .delay(1000)
        .queue(function(next) {
        $(this).animate({left: '+=100px'}, 1000);
        next();
        });
        ////
        cube.animate({left: '+=100px'}, 1000)
        .queue(function(next) {
        $(this).css({'background-color': 'blue'});
        next();
        })
        .delay(1000)
        .queue(function(next) {
        $(this).animate({left: '+=100px'}, 1000);
        next();
        });
        ////
        cube.animate({left: '+=100px'}, 1000)
        .queue(function(next) {
        $(this).css({'background-color': 'red'});
        next();
        })
        .delay(1000)
        .queue(function(next) {
        $(this).animate({left: '+=100px'}, 1000);
        next();
        });
        ///
        cube.animate({left: '+=100px'}, 1000)
        .queue(function(next) {
        $(this).css({'background-color': 'blue'});
        next();
        })
        .delay(1000)
        .queue(function(next) {
        $(this).animate({left: '+=100px'}, 1000);
        });
        next();
    });
  