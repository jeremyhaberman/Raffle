Winners = new Mongo.Collection("Winners");
Winners.allow({
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

  Meteor.publish('Winners', function () {
    // return all winners even if the user isn't logged in.  This does allow a savy user to discover
    // a winner before it is revealed but I am ont going to worry about that, its just a school raffle
    // and everyone will know soon enough...
    return Winners.find();
  });
}