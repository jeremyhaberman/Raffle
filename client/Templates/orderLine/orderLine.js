
Template.orderLine.events({
    'blur .item' : function(event) {
        var itemNum = parseInt($(event.target).val());
        if(isNaN(itemNum) || itemNum <= 0) {
            return;
        }
        OrderEntryTickets.update(this._id, {$set: {item: itemNum}});
    },
    'blur .quantity' : function(event) {
        var quantity = parseInt($(event.target).val());
        if(isNaN(quantity) || quantity <= 0) {
            $(event.target).focus();
            return;
        }
        if(!this.item || this.item < 0) {
            $('.item').focus();
            return;
        }
        OrderEntryTickets.update(this._id, {$set: {quantity: quantity}});

        var tickets = OrderEntryTickets.find().fetch();
        var total = 0;
        var quantity = 0;
        tickets.forEach(function(ticket) {
            if(ticket.item !== undefined) {
                var prize = Prizes.findOne({item : ticket.item});
                total += ticket.quantity * prize.price;
                quantity += ticket.quantity;
            }
        });
        Session.set("total", total);
        Session.set("quantity", quantity);


        OrderEntryTickets.insert(new Ticket());
        setTimeout(function() {
            $('.item').last().focus();
        },5);
    }
});
