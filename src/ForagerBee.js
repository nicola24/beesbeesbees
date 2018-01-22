// Create a ForagerBee class, in pseudoclassical style, with:
var ForagerBee = function() {
  // call the Bee superclass
  // set the prototype
  // set the constructor
  HoneyMakerBee.call(this);

  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to find pollen
  this.job = 'find pollen';
  // a color property inherited from bee that is set to yellow
  this.color = this.color;
  // a food property that is inherited from grub
  this.food = this.food;
  // a canFly property that is set true
  this.canFly = true;
  // a treasureChest property that is set to an empty array []
  this.treasureChest = [];
};

// an eat method that is inherited from grub
ForagerBee.prototype.eat = function() {
};

// a forage method that allows the bee to add a 
// treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};