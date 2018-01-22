// Create a ForagerBee class, in pseudoclassical style, with:
var ForagerBee = function() {
  // call the Bee superclass
  HoneyMakerBee.call(this);

  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to find pollen
  this.job = 'find pollen';
  // a canFly property that is set true
  this.canFly = true;
  // a treasureChest property that is set to an empty array []
  this.treasureChest = [];
};

  // set the prototype
  ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
  // set the constructor
  ForagerBee.prototype.constructor = ForagerBee;

// a forage method that allows the bee to add a 
// treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};