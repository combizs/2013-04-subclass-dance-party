var BlinkyDancer = function(top, left, timeBetweenSteps){
makeDancer.call(this, top, left, timeBetweenSteps);
// this.$node.attr("id","blinky");
// console.log(this.$node);
};
BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

BlinkyDancer.prototype.step = function(){
  //BlinkyDancer.$node.toggle();
  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
  this.$node.html("<img src='http://www.indianamarching.com/community/forums/avatars/yoda_concentrate.gif'>");
  function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function gun_bang(){
        var audio = document.createElement("audio");
        audio.src = "can-lid-being-popped.mp3";
        audio.addEventListener("ended", function () {
            document.removeChild(this);
        }, false);
        audio.play();
        }

    $('body').on('toggle', 'span', function() {
        gun_bang();
    });
var hex = get_random_color();
function rotater() {
var rotate = Math.floor(Math.random()*359);
return rotate;
}

function radius() {
var rad = Math.floor(Math.random()*100);
return rad;
}

  this.$node.css({"border-radius": radius(), border: hex+" "+radius()+"px solid", transform:"rotate("+rotater()+"deg)"});
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

var MovingDancer = function(top, left, timeBetweenSteps){
makeDancer.call(this, top, left, timeBetweenSteps);
};


MovingDancer.prototype = Object.create(makeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
MovingDancer.prototype.step = function(){
  //BlinkyDancer.$node.toggle();
  makeDancer.prototype.step.apply(this);
  // console.log(this.$node.offset());
  this.$node.addClass("MovingDancer");
  var that = this.$node;
  // that.animate({ top: "500px", left: "500px" }, 5000, function(){});
      animateDiv(that);
  function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];
  }

  function animateDiv(that){
    var newq = makeNewPosition();
    var oldq = that.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    that.animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(that);
    });
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  }
  animateDiv(that);
};