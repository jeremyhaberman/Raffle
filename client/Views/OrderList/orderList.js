Template.orderList.helpers({
   orders: function() {
       return Orders.find({}, {sort: {createdDateTime: -1}});
   },
    sum : function() {
        var allOrders = Orders.find().fetch();
        var sum = 0;
        allOrders.forEach(function(order) {
          if(!order.deleted) {
            sum += order.grandTotal;
          }
        });
        return sum;
    }

});

Template.orderList.events({
    'click #remove': function() {
        Orders.update(this._id, {$set: {
            deleted : true,
            deletedBy: Meteor.user().profile.name,
            deletedDateTime: new Date()
        }});
    }

});