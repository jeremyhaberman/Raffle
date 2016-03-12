function SeedUsers() {
  if(Meteor.users.find().count() !== 0)
  {
    return;
  }

  var password = Random.secret(10);

  Accounts.createUser({
    email: "chafey@gmail.com",
    password : password,
    profile: {name : "Chris Hafey"}
  });

  console.log('random password for chafey@gmail.com: ' + password);

}
SeedUsers();

SeedPrizes = function() {
  if(Prizes.find().count() !== 0) {
    return;
  }



  Prizes.insert(new Prize(1, 1, "Lunch with Dr. Dahlquist"));
  Prizes.insert(new Prize(2, 1, "Tour of Creek Valley"));
  Prizes.insert(new Prize(3, 1, "Principal for a Day"));
  Prizes.insert(new Prize(4, 1, "READ-IN on the Roof"));
  Prizes.insert(new Prize(5, 1, "Morning Announcements", 3));
  Prizes.insert(new Prize(6, 1, "Extra Recess"));
  Prizes.insert(new Prize(7, 1, "Lunch w/Kindergarten Teachers", 4));
  Prizes.insert(new Prize(8, 1, "Lunch w/Ms Dahlien", 1));
  Prizes.insert(new Prize(9, 1, "Lunch w/Ms Erny", 1));
  Prizes.insert(new Prize(10, 1, "Lunch w/Ms Theis", 1));
  Prizes.insert(new Prize(11, 1, "Lunch w/Ms Williams"));
  Prizes.insert(new Prize(12, 1, "Lunch w/Ms Link & Ms Rauen", 2));
  Prizes.insert(new Prize(13, 1, "Run w/Mr Devine", 1));
  Prizes.insert(new Prize(14, 1, "Lunch w/3rd Grade Teachers", 4));
  Prizes.insert(new Prize(15, 1, "Lunch w/4th Grade Teachers", 4));
  Prizes.insert(new Prize(16, 1, "Lunch w/5th Grade Teachers", 2));
  Prizes.insert(new Prize(17, 1, "Lunch w/Learning Specialists", 5));
  Prizes.insert(new Prize(18, 1, "Wild Rumpus gift card"));
  Prizes.insert(new Prize(19, 1, "Lunch w/Ms Gamble"));
  Prizes.insert(new Prize(20, 1, "Lunch w/Mr Jansen"));
  Prizes.insert(new Prize(21, 1, "Football fun w/Mr Jansen"));
  Prizes.insert(new Prize(22, 1, "Fire Truck Ride to School"));
  Prizes.insert(new Prize(23, 1, "Air Maxx gift card"));
  Prizes.insert(new Prize(24, 1, "Big Thrill Factory"));
  Prizes.insert(new Prize(25, 1, "Conquer Ninja Warrior"));
  Prizes.insert(new Prize(26, 1, "Dave and Busters"));
  Prizes.insert(new Prize(27, 1, "Kiddywumpus"));
  Prizes.insert(new Prize(28, 1, "Paper Source Party"));
  Prizes.insert(new Prize(29, 1, "Pump It Up"));
  Prizes.insert(new Prize(30, 1, "Roller Garden"));
  Prizes.insert(new Prize(31, 1, "Brunswick Bowling"));
  Prizes.insert(new Prize(32, 1, "Tuttle’s Bowling"));
  Prizes.insert(new Prize(33, 1, "Water Park of America"));
  Prizes.insert(new Prize(34, 1, "Bunker Beach Waterpark"));
  Prizes.insert(new Prize(35, 1, "Way Cool Cooking School"));
  Prizes.insert(new Prize(36, 1, "Minnesota Zoo"));
  Prizes.insert(new Prize(37, 1, "Minnesota Arboretum"));
  Prizes.insert(new Prize(38, 1, "Fun at Museums"));
  Prizes.insert(new Prize(39, 1, "Hyland Ski"));
  Prizes.insert(new Prize(40, 1, "Wild Mountain"));
  Prizes.insert(new Prize(41, 1, "Summer Football Camp"));
  Prizes.insert(new Prize(42, 1, "Edina Soccer Registration"));
  Prizes.insert(new Prize(43, 1, "2nd Edina Soccer Registration"));
  Prizes.insert(new Prize(44, 1, "Foss Swim School"));
  Prizes.insert(new Prize(45, 1, "43 Hoops Basketball Academy"));
  Prizes.insert(new Prize(46, 1, "Players Only"));
  Prizes.insert(new Prize(47, 1, "Platinum Dance Center"));
  Prizes.insert(new Prize(48, 1, "The Little Gym"));
  Prizes.insert(new Prize(49, 1, "Stages Theatre"));
  Prizes.insert(new Prize(50, 1, "Edina Theater & Red Cow"));

  Prizes.insert(new Prize(51, 1, "ICON Theater & Darden"));
  Prizes.insert(new Prize(52, 1, "ICON Theater & Rojo"));
  Prizes.insert(new Prize(53, 1, "Pizza Night"));
  Prizes.insert(new Prize(54, 1, "Restaurant Gift Cards"));
  Prizes.insert(new Prize(55, 1, "Redstone"));
  Prizes.insert(new Prize(56, 1, "Buffalo Wild Wings"));
  Prizes.insert(new Prize(57, 1, "Sweet Treats"));
  Prizes.insert(new Prize(58, 1, "Queen of Cakes"));
  Prizes.insert(new Prize(59, 1, "Free Food"));
  Prizes.insert(new Prize(60, 1, "Elements Massage"));
  Prizes.insert(new Prize(61, 1, "Pamper Yourself"));
  Prizes.insert(new Prize(62, 1, "Diaper Set"));
  Prizes.insert(new Prize(63, 1, "Vikings Photograph"));
  Prizes.insert(new Prize(64, 1, "Doggie Doo Pick Up"));
  Prizes.insert(new Prize(65, 1, "The Day Spa of Edina"));

  Prizes.insert(new Prize(66, 1, "Dohlan Class Art Project"));
  Prizes.insert(new Prize(67, 1, "Kelly Class Art Project"));
  Prizes.insert(new Prize(68, 1, "Meyerhofer Class Art Project"));
  Prizes.insert(new Prize(69, 1, "Pinto Class Art Project"));
  Prizes.insert(new Prize(70, 1, "Dahlien Class Art Project"));
  Prizes.insert(new Prize(71, 1, "Erny Class Art Project"));
  Prizes.insert(new Prize(72, 1, "Theis Class Art Project"));
  Prizes.insert(new Prize(73, 1, "Williams Class Art Project"));
  Prizes.insert(new Prize(74, 1, "Devine Class Art Project"));
  Prizes.insert(new Prize(75, 1, "Rauen Class Art Project"));
  Prizes.insert(new Prize(76, 1, "Schwartz Class Art Project"));
  Prizes.insert(new Prize(77, 1, "Link Class Art Project"));
  Prizes.insert(new Prize(78, 1, "Boles Class Art Project"));
  Prizes.insert(new Prize(79, 1, "Hockert Class Art Project"));
  Prizes.insert(new Prize(80, 1, "Wenner/Rink Class Art Project"));
  Prizes.insert(new Prize(81, 1, "Young Class Art Project"));
  Prizes.insert(new Prize(82, 1, "Beacom Class Art Project"));
  Prizes.insert(new Prize(83, 1, "Hawkinson Class Art Project"));
  Prizes.insert(new Prize(84, 1, "Nuss Class Art Project"));
  Prizes.insert(new Prize(85, 1, "Powell Class Art Project"));
  Prizes.insert(new Prize(86, 1, "Cavanaugh Class Art Project"));
  Prizes.insert(new Prize(87, 1, "Converse Class Art Project"));
  Prizes.insert(new Prize(88, 1, "Weiland-Karas Class Art Project"));
  Prizes.insert(new Prize(89, 1, "Wuest Class Art Project"));

  Prizes.insert(new Prize(90, 3, "Read Indeed"));
  Prizes.insert(new Prize(91, 3, "Edina Aquatic Center"));
  Prizes.insert(new Prize(92, 3, "Edina Swim CLub"));
  Prizes.insert(new Prize(93, 3, "Kidcreate Studio Party"));
  Prizes.insert(new Prize(94, 3, "Pinstripes Party"));
  Prizes.insert(new Prize(95, 3, "Tumble at TAGS"));
  Prizes.insert(new Prize(96, 3, "Chanhassen Theatre"));
  Prizes.insert(new Prize(97, 3, "Guthrie Theatre"));
  Prizes.insert(new Prize(98, 3, "CRAVE/Kaskaid Dinners"));
  Prizes.insert(new Prize(99, 3, "Parasole Dinners"));
  Prizes.insert(new Prize(100, 3, "R.F. Moeller Jeweler"));
  Prizes.insert(new Prize(101, 3, "Horizon Hobby Plane"));
  Prizes.insert(new Prize(102, 3, "Seasonal Chores"));
  Prizes.insert(new Prize(103, 3, "Tubing Fun"));
  Prizes.insert(new Prize(104, 3, "Minneapolis Golf Club"));

  Prizes.insert(new Prize(105, 5, "Edina Football Registration"));
  Prizes.insert(new Prize(106, 5, "Advances in Orthodontics"));
  Prizes.insert(new Prize(107, 5, "Park Tavern"));
  Prizes.insert(new Prize(108, 5, "Erik’s Retreat"));
  Prizes.insert(new Prize(109, 5, "Spurgeon Wild Jersey"));
  Prizes.insert(new Prize(110, 5, "Wild Tickets"));
  Prizes.insert(new Prize(111, 5, "Twins Tickets"));

  Prizes.insert(new Prize(112, 3, "Giant Teddy Bear"));
  Prizes.insert(new Prize(113, 3, "Candy Experiments"));
  Prizes.insert(new Prize(114, 3, "Barbie & Karaoke"));
  Prizes.insert(new Prize(115, 3, "Hexbugs Races"));
  Prizes.insert(new Prize(116, 3, "Ninjago Legos"));
  Prizes.insert(new Prize(117, 3, "Friends Legos"));
  Prizes.insert(new Prize(118, 3, "Pokemon"));
  Prizes.insert(new Prize(119, 3, "Shopkins"));
  Prizes.insert(new Prize(120, 3, "American Girl"));
  Prizes.insert(new Prize(121, 3, "Star Wars"));
  Prizes.insert(new Prize(122, 3, "STEM Time"));
  Prizes.insert(new Prize(123, 3, "MOA gift card"));
  Prizes.insert(new Prize(124, 3, "Groceries"));
  Prizes.insert(new Prize(125, 3, "Mom’s Baskets"));
  Prizes.insert(new Prize(126, 3, "Future Van Gogh"));
  Prizes.insert(new Prize(127, 3, "Beats Headphones"));
  Prizes.insert(new Prize(128, 3, "NERF Basket"));
  Prizes.insert(new Prize(129, 3, "Target Gift Card"));
  Prizes.insert(new Prize(130, 3, "Xbox One"));
  Prizes.insert(new Prize(131, 3, "IPAD"));
  Prizes.insert(new Prize(132, 3, "GoPro"));
  Prizes.insert(new Prize(133, 3, "ACER Cloudbook"));
  Prizes.insert(new Prize(134, 3, "Nintendo 3DS"));
  Prizes.insert(new Prize(135, 3, "CASH"));

}
//SeedPrizes();

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

}
//SeedOrders();