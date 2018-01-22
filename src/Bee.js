
// Create a Bee class, in pseudoclassical style, with:
var Bee = function() {
  // call the Grub superclass
  // set the prototype
  // set the constructor
  Grub.call(this);

  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  this.color = "yellow";
  // a food property that is inherited from grub
  this.food = this.food;
  // a job property that is set to keep on growing
  this.job = 'keep on growing';
};

// an eat method that is inherited from grub
Bee.prototype.eat = function() {
};



