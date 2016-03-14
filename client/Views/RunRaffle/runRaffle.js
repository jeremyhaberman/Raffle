Template.runRaffle.events({
    'click #removeWinners' : function() {
      if(confirm('Are you sure you want to remove all winners?  This cannot be undone!')) {
        Meteor.call('removeAllWinners');
      }
    },
  'click #runRaffle' : function() {
    if(confirm('Are you sure you want to pick winners for all prizes?  This should only be done once all prize data is entered!')) {
      Meteor.call('runRaffle');
    }
  },
  'click #updatePrizes' : function() {
        Meteor.call('updatePrizes');
    }
});