Template.winners.helpers({
   winner : function() {
       return Winners.find({revealed: true}, {sort: {item: -1}});
   }
});