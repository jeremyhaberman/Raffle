Template.reports.events({
  'click #winners' : function(event) {
    var winners = Prizes.find(
      {},
      {
        fields: {
          item: 1,
          name: 1,
          prizeName: 1,
          winnerName: 1
        }, sort: {
          item: 1
        }
      }
    ).fetch();
    var winnersCSV = Papa.unparse(winners);
    var oMyBlob = new Blob([winnersCSV], {type : 'text/csv'});
    saveAs( oMyBlob, 'winners.csv');
  },
  'click #prizes' : function() {
    var prizes = Prizes.find(
      {},
      {
        fields: {
          item: 1,
          name: 1,
          numWinners: 1,
          price: 1,
          tickets: 1
        }, sort: {
        item: 1
      }
      }
    ).fetch();

    // replace the array of tickets with the array length as thats all we want in the report
    prizes.forEach(function(prize) {
      prize.tickets = prize.tickets.length;
    });
    var prizesCSV = Papa.unparse(prizes);
    var oMyBlob = new Blob([prizesCSV], {type : 'text/csv'});
    saveAs( oMyBlob, 'prizes.csv');
  }
});