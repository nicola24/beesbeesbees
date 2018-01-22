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
  // a honeyPot property that is set to 0
  this.honeyPot = 0;
};

  // set the prototype
  HoneyMakerBee.prototype = Object.create(Bee.prototype);
  // set the constructor
  HoneyMakerBee.prototype.constructor = HoneyMakerBee;


// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};


