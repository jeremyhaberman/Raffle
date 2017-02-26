function SeedUsers() {
  if(Meteor.users.find().count() !== 0)
  {
    return;
  }

  var password = Random.secret(10);

  Accounts.createUser({
    email: "jphaberman@gmail.com",
    password : password,
    profile: {name : "Jeremy Haberman"}
  });

  console.log('random password for jphaberman@gmail.com: ' + password);

}

SeedUsers();

SeedPrizes = function() {
  if(Prizes.find().count() !== 0) {
    return;
  }

  // Prizes.insert(new Prize(item, price, "name"));

  Prizes.insert(new Prize(1, 1, "LUNCH WITH DR. DAHLQUIST"));
  Prizes.insert(new Prize(2, 1, "INSIDER’S TOUR OF CREEK VALLEY"));

};

SeedOrders = function() {
  if(Orders.find().count() !==0) {
    return;
  }

  var o1 = new Order("Chris Hafey");
  o1.tickets.push(new Ticket(1, 1));
  o1.tickets.push(new Ticket(5, 1));
  Orders.insert(o1);
  var o2 = new Order("Deanna Duffy");
  o2.tickets.push(new Ticket(5, 3));
  Orders.insert(o2);

};
