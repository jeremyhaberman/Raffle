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

  Prizes.insert(new Prize(1, 2, "*NEW* SURPRISE ITEM!"));
  Prizes.insert(new Prize(2, 2, "LUNCH WITH DR. DAHLQUIST"));
  Prizes.insert(new Prize(3, 2, "INSIDER’S TOUR OF CREEK VALLEY"));
  Prizes.insert(new Prize(4, 2, "PRINCIPAL FOR A DAY"));
  Prizes.insert(new Prize(5, 2, "POLICE CAR RIDE TO SCHOOL"));
  Prizes.insert(new Prize(6, 2, "FIRE TRUCK RIDE TO SCHOOL"));
  Prizes.insert(new Prize(7, 2, "WILD MOUNTAIN WATER PARK"));
  Prizes.insert(new Prize(8, 2, "RAPTOR CENTER"));
  Prizes.insert(new Prize(9, 2, "SCIENCE MUSEUM"));
  Prizes.insert(new Prize(10, 2, "THE HAIR DISTRICT"));
  Prizes.insert(new Prize(11, 2, "DABOMB BATH BOMBS SET"));
  Prizes.insert(new Prize(12, 2, "SCHOOL SUPPLY BOX"));
  Prizes.insert(new Prize(13, 2, "XBOX ONE X"));
  Prizes.insert(new Prize(14, 2, "YETI SOFT COOLER HOPPER FLIP 12 (FIELD TAN/BLAZE ORANGE)"));
  Prizes.insert(new Prize(15, 2, "WELLNESS PACKAGE"));
  Prizes.insert(new Prize(16, 2, "EDINA SEASONAL SERVICES"));
  Prizes.insert(new Prize(17, 2, "BOWLING PARTY"));
  Prizes.insert(new Prize(18, 2, "OBSTACLE ACADEMY BIRTHDAY PARTY"));
  Prizes.insert(new Prize(19, 2, "MOA GIFT BASKET"));
  Prizes.insert(new Prize(20, 2, "FAMILY NIGHT OUT"));
  Prizes.insert(new Prize(21, 2, "FAMILIES WHO DINE TOGETHER"));
  Prizes.insert(new Prize(22, 2, "MORE DINNERS OUT"));
  Prizes.insert(new Prize(23, 2, "GOLF CLUB PACKAGE"));
  Prizes.insert(new Prize(24, 2, "GOLF LESSON PACKAGE", 2));
  Prizes.insert(new Prize(25, 2, "MINNESOTA TIMBERWOLVES TICKETS"));
  Prizes.insert(new Prize(26, 2, "MINNESOTA WILD TICKETS #1"));
  Prizes.insert(new Prize(27, 2, "MINNESOTA WILD TICKETS #2"));
  Prizes.insert(new Prize(28, 2, "MINNESOTA WILD SUTER SIGNED JERSEY"));
  Prizes.insert(new Prize(29, 2, "MINNESOTA WILD SPURGEON SIGNED STICK"));
  Prizes.insert(new Prize(30, 2, "TWINS TICKETS"));
  Prizes.insert(new Prize(31, 2, "HARRY POTTER BASKET"));
  Prizes.insert(new Prize(32, 2, "FAMILY MOVIE NIGHT"));
  Prizes.insert(new Prize(33, 2, "FAMILY GAME NIGHT"));
  Prizes.insert(new Prize(34, 2, "OVERSIZED LAWN GAMES"));
  Prizes.insert(new Prize(35, 2, "STAR WARS BASKET"));
  Prizes.insert(new Prize(36, 2, "LEGO FRIENDS"));
  Prizes.insert(new Prize(37, 2, "NINTENDO SWITCH"));
  Prizes.insert(new Prize(38, 2, "AMERICAN GIRL, LUCIANA!"));
  Prizes.insert(new Prize(39, 2, "HAPPILY EVER CRAFTER"));
  Prizes.insert(new Prize(40, 2, "HOVERBOARD"));
  Prizes.insert(new Prize(41, 2, "IPAD MINI 4 WI-FI (128GB)"));
  Prizes.insert(new Prize(42, 2, "IPOD TOUCH (32GB)"));
  Prizes.insert(new Prize(43, 2, "EDINA POOL PACKAGE"));
  Prizes.insert(new Prize(44, 2, "GROCERY PACKAGE"));
  Prizes.insert(new Prize(45, 2, "DAY AT THE SPA"));
  Prizes.insert(new Prize(46, 2, "SERVICE PROJECT PACKAGE"));
  Prizes.insert(new Prize(47, 2, "$300 TARGET GIFT CARD"));
  Prizes.insert(new Prize(48, 2, "$300 CASH"));

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
