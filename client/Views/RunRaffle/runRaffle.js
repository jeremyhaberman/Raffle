Template.runRaffle.events({
    'click #removeWinners' : function() {
      if(confirm('Are you sure you want to remove all winners?  This cannot be undone!')) {
        Meteor.call('removeAllWinners');
      }
    },
  'click #runRaffle' : function() {
    if(Winners.find().count() > 0) {
      alert('Winners exist for this raffle - please delete them before running again');
      return;
    }
    if(confirm('Are you sure you want to pick winners for all prizes?')) {
      Meteor.call('runRaffle');
    }
  },
  'click #revealWinners' : function() {
    var url = '/winnerDetails/1';
    //Router.go(url);
    window.location = url;
  }
});