Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home'
});
Router.route('/winners', {
    name: 'winners'
});
Router.route('/prizeList', {
    name: 'prizeList'
});
Router.route('/orderList', {
    name: 'orderList'
});
Router.route('/orderEntry', {
    name: 'orderEntry'
});
Router.route('/runRaffle', {
    name: 'runRaffle'
});
Router.route('/admin', {
    name: 'admin'
});
Router.route('/reports', {
  name: 'reports'
});

Router.route('/orderDetails/:_id', {
    name: "orderDetails",
    data: function() {return Orders.findOne(this.params._id);}
});
Router.route('/prizeDetails/:_id', {
    name: "prizeDetails",
    data: function() {return Prizes.findOne(this.params._id);}
});
Router.route('/winnerDetails/:_id', {
    name: "winnerDetails",
    layoutTemplate: '',
    data: function() {return Winners.findOne({prizeNum: parseInt(this.params._id)});}
});
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('home');
            return pause();
        }
        this.next();
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['prizeList', 'orderList', 'orderEntry', 'runRaffle','admin', 'orderDetails', 'prizeDetails', 'winnerDetails']
});
