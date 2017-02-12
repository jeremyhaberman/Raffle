

Template.winnerDetails.rendered = function() {
    var id = "";
    var winner = undefined;

    var stopLoop=false;
    $('body').on('keydown', function(event) {
        if(event.keyCode === 32) { // spacebar
            console.log('space');
            var id = $('#winner').attr('data-id');
            var prizeNum = parseInt($('#winner').attr('data-prizeNum'));
            console.log(prizeNum);
            console.log(id);
            var winner = Winners.findOne(id);
            if(winner.revealed === true) {
                console.log('gotonext prize')
                // go to next prize
                ++prizeNum;
                console.log(prizeNum);
                var url = '/winnerDetails/' + prizeNum;
                //Router.go(url);
                //onTimeout();
                window.location=url;//Router.go(url);
            }
            else {
                Winners.update({_id: id}, {$set : {revealed: true}});
                loop();
            }
        }
    });

    function onTimeout() {
        id = $('#winner').attr('data-id');
        console.log('id=' + id);
        winner = Winners.findOne(id);
        if(winner === undefined) {
            console.log('null, retryign');
            setTimeout(onTimeout, 10);
            return;
        }
        console.log(winner);
        drawText(ctx, winner.revealed);
    }

    window.setTimeout(onTimeout, 10);


    window.requestAnimFrame = ( function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function( callback ) {
                window.setTimeout( callback, 1000 / 60 );
            };
    })();


};
