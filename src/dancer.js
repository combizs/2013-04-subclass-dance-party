// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  window.dancers.push(this.$node);
};

makeDancer.prototype.setPosition = function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var that = this;
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log(this);
  var that = this;
  setTimeout(function(){ that.step(); }, this.timeBetweenSteps);
};

makeDancer.prototype.setColor = function(){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var styleSettings = {
      border: 'blue 10px solid'
    };
    this.$node.css(styleSettings);
};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
