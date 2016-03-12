Template.admin.events({
    'click #reset' : function() {
        Meteor.call("reset");
    },
    'submit ' : function() {
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();

        Meteor.call("addUser", email, password, username);

        return false;
    }
})