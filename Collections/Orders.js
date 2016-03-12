Orders = new Mongo.Collection("Orders");
Orders.allow({
    insert: function(userId) {
        return userId;
    },
    update: function(userId) {
        return userId;
    },
    remove: function(userId) {
        return userId;
    },
});

if(Meteor.isServer) {
  Meteor.publish('Orders', function() {
    if(!this.userId) {
      return;
    }
    return Orders.find();
  });
}

