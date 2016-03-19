Tracker.autorun(function(){
  if ( Meteor.user() ){
    Meteor.subscribe('Orders');
    Meteor.subscribe('Prizes');
  }
});

