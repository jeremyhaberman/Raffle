OrderEntryTickets = new Mongo.Collection(null);
Session.set("total", 0);
Session.set("quantity", 0);

PrizeReport = new Mongo.Collection(null);

Meteor.subscribe('Winners');
