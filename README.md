Raffle
======

This is a meteor 1.2.1 based application that is used to assist with running school raffles.

Features
--------

* Requires modern HTMl5 browser - google chrome is what I use and recommend
* Order entry for raffle orders /orderEntry
* Run raffle /runRaffle
* View / edit orders /orderList
* View prizes list /prizeList
* View winners /winners
* Reveal winners /winnerDetails/{prize#} where prize# starts with 1 and goes to the # of prizes
* Create users /admin

Development
-----------

* Install meteor (www.meteor.com)
* Pull source code
* Run meteor.  The user chafey@gmailcom will be created with a random password, check console/logs for this password and login

Deployment
----------

* Use Modulus.io or Meteor Galaxy.
* The user chafey@gmailcom will be created with a random password, check console/logs for this password and login.
* Once logged in, open the javascript console in the browser and reset the database:
> Meteor.call('reset');

Pre raffle
----------
* The program needs to be updated with the new prize list for that year.  The raffle committee will deliver a prize
  list at some point and it has to be converted manually into code.  This doesn't take too long - 20-30 minutes or so
  so I haven't bothered to create screens for this.
* The program needs to be updated with the new logo for this years carnival. The logo is stored in
  /public/carnival graphic color for web.jpg
* The program needs to be deployed.  Since meteor no longer provides free hosting, it probably makes sense to bring
  down the deployment once the raffle is done to avoid paying for something that isn't being used
* Once deployed, have the volunteers verify the prize data.  There has been mistakes on the data provided as well
  as data entry so it is important to double check.
* User accounts need to be created for the volunteers involved in the raffle each year.  Usually there are 2-3 people,
  get their email address and create accounts via the /admin screen then email them the info
* Volunteers will enter the orders in advance of the raffle.  Be aware that ~50% of the orders are placed the day of
  the raffle.  They should be fine if you have the system up and running the week of the carnival

Setup (night of raffle)
-----------------------

* Main gym - laptop and two projectors.  The school provides the projectors, I use my own laptop.
  The laptop has its own RGB out and I add a second with a USB to VGA adapter.  Two screens are used during the
  drawing - one to show the list of winners (/winners) and another to do the drawing (/winnerDetails).  Use separate
  browser windows for each.  Before the drawing I leave the home page (/) up on both which displays the
  logo for that year.  The school does have a public wifi which you can try using, but I don't want to depend on it
  and use my tethered iPhone.  The school wifi does have a firewall and can get congested when everyone is in the
  gym, but that could also have an effect on my iPhone's LTE/4G connection.  Fortunately there haven't been any
  network related issues but it is a risk...
* Cafeteria - Not everyone can fit in the gym so we setup another computer connected to the screen in the cafeteria
  to show the winners (/winners).  The school already has a computer setup to that screen so you simply need to
  login with web browser
* Order Entry - One or more volunteers may be entering orders into the system.  They do this using their own laptops
  using a web browser.


Running the raffle
------------------

Once all orders have been entered, go to the /runRaffle page and click the button "Run Raffle".  This will pick winners
for all the prizes based on the orders entered at that time.  To reveal the winners, go to the following URL:

/winnerDetails/1

hit space bar to reveal the winner (and watch cool fireworks), then spacebar to go to next prize winner.  You can go
to any prize number by changing the URL to the right prize/item #