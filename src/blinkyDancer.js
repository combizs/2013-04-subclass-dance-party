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
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
