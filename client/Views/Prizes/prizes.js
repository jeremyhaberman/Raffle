Template.prizeList.helpers({

    prizes: function() {
        return Prizes.find({}, {sort: {item: 1}});
    },
    winners: function() {
        if(this.numWinners > 1) {
            return " - " + this.numWinners + " winners";
        }
    },
    numTickets : function() {
        return this.tickets.length;
    },
    value: function() {
        if(this.value === 0) {
            return '[Value: priceless]';
        }
        if(this.value === null || this.value == undefined) {
            return '';
        }
        else {
            return '[Value: ' + this.value + ']';
        }
    }
});
