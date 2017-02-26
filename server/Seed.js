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
  
  // Prizes.insert(new Prize(3, price, "name"));
  // Prizes.insert(new Prize(4, price, "name"));
  // Prizes.insert(new Prize(5, price, "name"));
  // Prizes.insert(new Prize(6, price, "name"));
  // Prizes.insert(new Prize(7, price, "name"));
  // Prizes.insert(new Prize(8, price, "name"));
  // Prizes.insert(new Prize(9, price, "name"));
  // Prizes.insert(new Prize(10, price, "name"));
  //
  // Prizes.insert(new Prize(11, price, "name"));
  // Prizes.insert(new Prize(12, price, "name"));
  // Prizes.insert(new Prize(13, price, "name"));
  // Prizes.insert(new Prize(14, price, "name"));
  // Prizes.insert(new Prize(15, price, "name"));
  // Prizes.insert(new Prize(16, price, "name"));
  // Prizes.insert(new Prize(17, price, "name"));
  // Prizes.insert(new Prize(18, price, "name"));
  // Prizes.insert(new Prize(19, price, "name"));
  // Prizes.insert(new Prize(20, price, "name"));
  //
  // Prizes.insert(new Prize(21, price, "name"));
  // Prizes.insert(new Prize(22, price, "name"));
  // Prizes.insert(new Prize(23, price, "name"));
  // Prizes.insert(new Prize(24, price, "name"));
  // Prizes.insert(new Prize(25, price, "name"));
  // Prizes.insert(new Prize(26, price, "name"));
  // Prizes.insert(new Prize(27, price, "name"));
  // Prizes.insert(new Prize(28, price, "name"));
  // Prizes.insert(new Prize(29, price, "name"));
  // Prizes.insert(new Prize(30, price, "name"));
  //
  // Prizes.insert(new Prize(31, price, "name"));
  // Prizes.insert(new Prize(32, price, "name"));
  // Prizes.insert(new Prize(33, price, "name"));
  // Prizes.insert(new Prize(34, price, "name"));
  // Prizes.insert(new Prize(35, price, "name"));
  // Prizes.insert(new Prize(36, price, "name"));
  // Prizes.insert(new Prize(37, price, "name"));
  // Prizes.insert(new Prize(38, price, "name"));
  // Prizes.insert(new Prize(39, price, "name"));
  // Prizes.insert(new Prize(40, price, "name"));
  //
  // Prizes.insert(new Prize(41, price, "name"));
  // Prizes.insert(new Prize(42, price, "name"));
  // Prizes.insert(new Prize(43, price, "name"));
  // Prizes.insert(new Prize(44, price, "name"));
  // Prizes.insert(new Prize(45, price, "name"));
  // Prizes.insert(new Prize(46, price, "name"));
  // Prizes.insert(new Prize(47, price, "name"));
  // Prizes.insert(new Prize(48, price, "name"));
  // Prizes.insert(new Prize(49, price, "name"));
  // Prizes.insert(new Prize(50, price, "name"));


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
