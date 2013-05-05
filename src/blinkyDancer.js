var BlinkyDancer = function(top, left, timeBetweenSteps){
makeDancer.call(this, top, left, timeBetweenSteps);

};
BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

BlinkyDancer.prototype.step = function(){
  //BlinkyDancer.$node.toggle();
  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
  //this.$node.toggle();
};

    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */

var NonBlinkyDancer = function(top, left, timeBetweenSteps){
makeDancer.call(this, top, left, timeBetweenSteps);

};
NonBlinkyDancer.prototype = Object.create(makeDancer.prototype);
NonBlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

NonBlinkyDancer.prototype.step = function(){
  //BlinkyDancer.$node.toggle();
  makeDancer.prototype.step.apply(this);
  //this.$node.toggle();
  //this.$node.toggle();
};

