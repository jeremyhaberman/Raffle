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

  // CV STAFF ($1)

  Prizes.insert(new Prize(1, 1, "LUNCH WITH DR. DAHLQUIST"));
  Prizes.insert(new Prize(2, 1, "INSIDER’S TOUR OF CREEK VALLEY"));
  Prizes.insert(new Prize(3, 1, "PRINCIPAL FOR A DAY"));
  Prizes.insert(new Prize(4, 1, "READ – IN ON THE ROOF"));
  Prizes.insert(new Prize(5, 1, "BROADCAST MORNING ANNOUNCEMENTS", 3));
  Prizes.insert(new Prize(6, 1, "EXTRA RECESS"));
  Prizes.insert(new Prize(7, 1, "LUNCH WITH THE KINDERGARTEN TEACHERS", 4));
  Prizes.insert(new Prize(8, 1, "PIZZA LUNCH WITH MRS. DAHLIEN"));
  Prizes.insert(new Prize(9, 1, "PIZZA LUNCH WITH MRS. ERNY"));
  Prizes.insert(new Prize(10, 1, "PIZZA LUNCH WITH MRS. THEIS"));
  Prizes.insert(new Prize(11, 1, "PIZZA LUNCH WITH MRS. WILLIAMS"));
  Prizes.insert(new Prize(12, 1, "PIZZA PICNIC WITH MRS. BEACOM"));
  Prizes.insert(new Prize(13, 1, "PIZZA PICNIC WITH MRS. STARK/MRS. LINK"));
  Prizes.insert(new Prize(14, 1, "PIZZA PICNIC WITH MRS. RAUEN"));
  Prizes.insert(new Prize(15, 1, "PIZZA PICNIC WITH MRS. SCHWARTZ"));
  Prizes.insert(new Prize(16, 1, "ICE-CREAM AND LUNCH WITH THE 3RD GRADE TEACHERS", 4));
  Prizes.insert(new Prize(17, 1, "PICNIC LUNCH WITH THE 4TH GRADE TEACHERS", 4));
  Prizes.insert(new Prize(18, 1, "PIZZA LUNCH WITH THE 5TH GRADE TEACHERS", 2));
  Prizes.insert(new Prize(19, 1, "LUNCH WITH MRS. GAMBLE "));
  Prizes.insert(new Prize(20, 1, "WILD FOR BOOKS"));
  Prizes.insert(new Prize(21, 1, "PIZZA WITH THE PE TEACHERS", 2));
  Prizes.insert(new Prize(22, 1, "PIZZA LUNCH", 5));
  Prizes.insert(new Prize(23, 1, "ELECTRIC GUITAR"));

  // EXPERIENCES ($1)

  Prizes.insert(new Prize(24, 1, "FIRE TRUCK RIDE TO SCHOOL"));
  Prizes.insert(new Prize(25, 1, "POLICE CAR RIDE TO SCHOOL"));

  // ACTIVITIES ($1)

  Prizes.insert(new Prize(26, 1, "JUMP TIME"));
  Prizes.insert(new Prize(27, 1, "DAVE AND BUSTERS"));
  Prizes.insert(new Prize(28, 1, "PUMP IT UP"));
  Prizes.insert(new Prize(29, 1, "VERTICAL ENDEAVORS"));
  Prizes.insert(new Prize(30, 1, "KIDDYWUMPUS"));
  Prizes.insert(new Prize(31, 1, "RAD ZOO"));
  Prizes.insert(new Prize(32, 1, "SEA LIFE"));
  Prizes.insert(new Prize(33, 1, "MINNESOTA ZOO"));
  Prizes.insert(new Prize(34, 1, "STAGES THEATRE", 2));

  // SPORTS REGISTRATION ($1)

  Prizes.insert(new Prize(35, 1, "SUMMER FOOTBALL CAMP"));
  Prizes.insert(new Prize(36, 1, "EDINA BASEBALL", 2));
  Prizes.insert(new Prize(37, 1, "EDINA SOCCER REGISTRATION", 2));
  Prizes.insert(new Prize(38, 1, "EDINA BASKETBALL"));
  Prizes.insert(new Prize(39, 1, "EDINA SWIM CLUB"));
  Prizes.insert(new Prize(40, 1, "EDINA LACROSSE"));
  Prizes.insert(new Prize(41, 1, "43 HOOPS BASKETBALL ACADEMY"));

  // SERVICES ($?)

  Prizes.insert(new Prize(42, 1, "PAMPER YOURSELF"));
  Prizes.insert(new Prize(43, 1, "HAIRCUTS AT DICK’S SPORTS BARBERS"));
  Prizes.insert(new Prize(44, 1, "DALE PORTRAIT STUDIOS"));

  // FOR THE KIDS AND GROWN UP KIDS ($?)

  Prizes.insert(new Prize(45, 1, "SCHOOL SUPPLY BOX"));
  Prizes.insert(new Prize(46, 1, "ARTSONIA"));
  Prizes.insert(new Prize(47, 1, "MAD SCIENCE"));
  Prizes.insert(new Prize(48, 1, "BATH BOMBS"));
  Prizes.insert(new Prize(49, 1, "FRINGE"));
  Prizes.insert(new Prize(50, 1, "DOUBLE TAKE SALSA"));
  Prizes.insert(new Prize(51, 1, "SWEET TREATS"));
  Prizes.insert(new Prize(52, 1, "DAVANNI’S PIZZA PARTY"));
  Prizes.insert(new Prize(53, 1, "ICON THEATRE & DINNER AT RED COW"));
  Prizes.insert(new Prize(54, 1, "RED SAVOY"));
  Prizes.insert(new Prize(55, 1, "DINNER’S OUT"));
  Prizes.insert(new Prize(56, 1, "PAPER SOURCE"));

  // RAFFLE $3

  Prizes.insert(new Prize(57, 3, "SCIENCE MUSEUM"));
  Prizes.insert(new Prize(58, 3, "PINSTRIPES PARTY"));
  Prizes.insert(new Prize(59, 3, "TUMBLE AT TAGS"));
  Prizes.insert(new Prize(60, 3, "MORE DINNER’S OUT"));
  Prizes.insert(new Prize(61, 3, "EVEN MORE DINNERS OUT"));
  Prizes.insert(new Prize(62, 3, "TIMBERWOLVES GAME"));
  Prizes.insert(new Prize(63, 3, "DIAMONDS ARE A GIRL’S BEST FRIEND"));
  Prizes.insert(new Prize(64, 3, "EDINA SEASONAL SERVICES"));

  // RAFFLE $5

  Prizes.insert(new Prize(65, 5, "DISNEY!!!"));
  Prizes.insert(new Prize(66, 5, "NINJA UNITED PARTY"));
  Prizes.insert(new Prize(67, 5, "EDINA FOOTBALL REGISTRATION"));
  Prizes.insert(new Prize(68, 5, "BOWL-A-RAMA PARK TAVERN"));
  Prizes.insert(new Prize(69, 5, "SPURGEON SIGNED STICK"));
  Prizes.insert(new Prize(70, 5, "SUTER SIGNED STICK"));
  Prizes.insert(new Prize(71, 5, "WILD TICKETS"));
  Prizes.insert(new Prize(72, 5, "TWINS TICKETS"));

  // CLASSROOM BASKETS ($3)

  Prizes.insert(new Prize(73, 3, "SPLISH SPLASH IN EDINA"));
  Prizes.insert(new Prize(74, 3, "POKEMON!!"));
  Prizes.insert(new Prize(75, 3, "LEGOS: MAY THE FORCE BE WITH YOU!"));
  Prizes.insert(new Prize(76, 3, "LEGO FRIENDS...AMUSEMENT PARK!"));
  Prizes.insert(new Prize(77, 3, "JUNIOR GOLF SET PINK + GOLF LESSON"));
  Prizes.insert(new Prize(78, 3, "JUNIOR GOLF SET RED + GOLF LESSON"));
  Prizes.insert(new Prize(79, 3, "ARTWORK CREATED BY THE ENTIRE SCHOOL"));
  Prizes.insert(new Prize(80, 3, "GOPRO HERO SESSION"));
  Prizes.insert(new Prize(81, 3, "ALEXA BLUETOOTH SPEAKER + SPOTIFY GC"));

  // CLASSROOM BASKETS ($5)

  Prizes.insert(new Prize(82, 5, "FITBIT + LULULEMON"));
  Prizes.insert(new Prize(83, 5, "AMERICAN GIRL, ISABELLE!"));
  Prizes.insert(new Prize(84, 5, "HOVERBOARD"));
  Prizes.insert(new Prize(85, 5, "VIRTUAL REALITY + SPEAKER"));
  Prizes.insert(new Prize(86, 5, "IPOD TOUCH"));
  Prizes.insert(new Prize(87, 5, "IPAD MINI"));
  Prizes.insert(new Prize(88, 5, "XBOX ONE!!"));
  Prizes.insert(new Prize(89, 5, "WHO NEEDS GROCERIES"));
  Prizes.insert(new Prize(90, 5, "SPALON MONTAGE"));
  Prizes.insert(new Prize(91, 5, "$300 TARGET GIFT CARD"));
  Prizes.insert(new Prize(92, 5, "$300 CASH"));

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
