Template.orderList.helpers({
  activeOrders: function() {
    return Orders.find({ "deleted" : false }, {sort: {createdDateTime: -1}});
  },
  deletedOrders: function() {
    return Orders.find({ "deleted" : true }, {sort: {createdDateTime: -1}});
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
