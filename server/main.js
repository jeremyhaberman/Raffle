Accounts.config({
    forbidClientAccountCreation : true
});

Meteor.methods({
    reset: function() {
        if(!Meteor.userId()) {
            return;
        }
        Orders.remove({});
        Prizes.remove({});
        SeedPrizes();
        //SeedOrders();
    },

  runRaffle : function() {
        if(!Meteor.userId()) {
            return;
        }
        Winners.remove({});
        var orders = Orders.find({deleted: false}).fetch();
        var tickets = [];
        var prizeNum = 1;
        Prizes.find({}, {sort: {item: 1}}).fetch().forEach(function(prize) {
            tickets = []; // reset it
            orders.forEach(function(order) {
                order.tickets.forEach(function(ticket) {
                    if(ticket.item === prize.item) {
                        for(var i=0; i < ticket.quantity; i++) {
                            tickets.push(order.name)
                        }
                    }
                });
            });
            Prizes.update(prize, {$set: {tickets: tickets}});

            for(var j=0; j < prize.numWinners; j++) {
                if(tickets.length > 0) {
                    console.log("picking winner for " + prize.item);
                    var winningTicketIndex = Math.floor(Math.random() * tickets.length);
                    console.log("winning index = " + winningTicketIndex);
                    var winner = new Winner(prizeNum, prize.name, prize.item, tickets[winningTicketIndex]);
                    console.log('winner = ' + tickets[winningTicketIndex]);
                    Winners.insert(winner);
                    tickets.splice(winningTicketIndex, 1);
                    prizeNum++;
                }
            }
        });
    },
    updatePrizes : function() {
        if(!Meteor.userId()) {
            return;
        }
        var orders = Orders.find({deleted: false}).fetch();
        var tickets = [];
        Prizes.find().fetch().forEach(function(prize) {
            tickets = [];
            orders.forEach(function(order) {
                order.tickets.forEach(function(ticket) {
                    if(ticket.item === prize.item) {
                        for(var i=0; i < ticket.quantity; i++) {
                            tickets.push(order.name)
                        }
                    }
                });
            });
            Prizes.update(prize, {$set: {tickets: tickets}});
        });
    },

    addUser: function(email, password, username) {
        if(!Meteor.userId()) {
            return;
        }
        Accounts.createUser({
            email: email,
            password : password,
            profile: {name : username}
        });

    }


});