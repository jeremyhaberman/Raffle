// publish all users to authenticated users so we can show the list of users
Meteor.publish('AllUsers', function() {
  if (!this.userId) {
    return;
  }
  return Meteor.users.find();
});