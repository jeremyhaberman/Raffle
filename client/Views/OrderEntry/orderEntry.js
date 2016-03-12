Template.orderEntry.helpers({
    tickets: function() {
        return OrderEntryTickets.find();
    },
    total :function() {
        return Session.get("total");
    },
    quantity : function() {
        return Session.get("quantity");
    }

});

Template.orderEntry.events({
    'submit' : function() {
        console.log('submit');
        var name = $('#name').val();
        if(!name || name.trim() === '') {
            $('#name').focus();
            return false;
        }
        var order = new Order(name);
        order.phone = $('#phone').val();
        order.email = $('#email').val();
        order.teacher = $('#teacher').val();
        var tickets = OrderEntryTickets.find().fetch();
        var lastTicket = tickets[tickets.length - 1];
        if(!lastTicket.item || !lastTicket.quantity) {
            tickets.pop();
        }
        order.tickets = tickets;
        order.grandTotal = Session.get("total");
        Orders.insert(order);
        OrderEntryTickets.remove({});
        OrderEntryTickets.insert(new Ticket());
        $('#name').val("").focus();
        Session.set("total", 0);
        Session.set("quantity", 0);
        return false;
    }
});

Template.orderEntry.rendered = function() {
    OrderEntryTickets.remove({});
    OrderEntryTickets.insert(new Ticket());
    Session.set("total", 0);
    Session.set("quantity", 0);

}




