Template.admin.helpers({
  'allUsers' : function() {
    return Meteor.users.find();
  }
});

Template.admin.events({
    'submit ' : function() {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();

        Meteor.call("addUser", email, password, username);

        return false;
    }
})