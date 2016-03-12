Template.runRaffle.events({
    'click #runRaffle' : function() {
        Meteor.call('runRaffle');
    },
    'click #updatePrizes' : function() {
        Meteor.call('updatePrizes');
    }
})