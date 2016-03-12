Prizes = new Mongo.Collection("Prizes");
Prizes.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId) {
    return userId;
  },
  remove: function(userId) {
    return userId;
  }
});

if(Meteor.isServer) {

  Meteor.publish('Prizes', function () {
    if (!this.userId) {
      return;
    }
    return Prizes.find();
  });
}