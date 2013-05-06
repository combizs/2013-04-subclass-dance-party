var FollowDancer = function(top, left, timeBetweenSteps){
makeDancer.call(this, top, left, timeBetweenSteps);
};


FollowDancer.prototype = Object.create(makeDancer.prototype);
FollowDancer.prototype.constructor = FollowDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  FollowDancer.prototype.step = function(){
  //BlinkyDancer.$node.toggle();
  // makeDancer.prototype.step.apply(this);
  // console.log(this.$node.offset());
  this.$node.addClass("FollowDancer");
  var array = window.dancers;
  // console.log(array);
  for(var i =0; i < window.dancers.length; i++){
    if(array[i].is(".FollowDancer")){
      array.pop(i);
    }
  }
  var distance = [];
  var check = -1;
  var lastDistance = -1;
  var newLeft = -1;
  var newTop = -1;
  for(var j=0; j < array.length; j++) {
    var aSquare = Math.pow(Math.abs(parseInt(this.$node.css('top'),10) - parseInt(array[j].css('top'),10), 2));
    var bSquare = Math.pow(Math.abs(parseInt(this.$node.css('left'),10) - parseInt(array[j].css('top'),10), 2));
    var cSquare = aSquare + bSquare;
    if (lastDistance === -1) {
      check = j;
      lastDistance = Math.sqrt(cSquare);
      newTop = array[j].position().top;
      newLeft = array[j].position().left;
    }
    else {
      if(Math.sqrt(cSquare) < lastDistance){
        lastDistance = Math.sqrt(cSquare);
        check = j;
        newTop = array[j].position().top;
        newLeft = array[j].position().left;
      }
    }debugger;
  }
  this.$node.animate({ top: newTop+"px", left: newLeft+"px" }, 5000, function(){});
};