// Create a HoneyMakerBee class, in pseudoclassical style, with:
var HoneyMakerBee = function() {
  // call the Bee superclass
  // set the prototype
  // set the constructor
  Bee.call(this);

  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to make honey
  this.job = 'make honey';
  // a color property inherited from bee that is set to yellow
  this.color = this.color;
  // a food property that is inherited from grub
  this.food = this.food;
  // a honeyPot property that is set to 0
  this.honeyPot = 0;
};

// an eat method that is inherited from grub
HoneyMakerBee.prototype.eat = function() {
};

// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
