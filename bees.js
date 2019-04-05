//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;

var bees = []; 
var	numBees = 50;
var speed = 1;//world speed

//bee object
var bee = {
		create: function() {
			var obj = Object.create(this);
			obj.init.apply(obj);
			return obj;
		},

		init: function() {
			this.angleX = Math.random() * Math.PI * 2;//position
			this.angleY = Math.random() * Math.PI * 2;
			this.speedX = Math.random() * 0.1 - 0.05;//speeds
			this.speedY = Math.random() * 0.1 - 0.05;
			this.radius = 10 + Math.random() * 290;//distance from the center
		},

		update: function() {
			var x = Math.cos(this.angleX) * this.radius,
				y = Math.sin(this.angleY) * this.radius;
			this.angleX += this.speedX*speed;
			this.angleY += this.speedY*speed;

			ctx.beginPath();
			ctx.arc(canvasWidth/2 + x, canvasHeigth/2 + y, 2, 0, Math.PI * 2, false);
			ctx.fill();
		}
	};

//instanciate number of bees
for(var i = 0; i < numBees; i += 1) {
		bees.push(bee.create());
	}

//clear canvas function
var clearCanvas = function () {
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
    ctx.beginPath();//only this can remove stroke
};



var main = function(){
    init = window.requestAnimationFrame(main);
    
    clearCanvas();
    for(var i = 0; i < numBees; i += 1) {
			bees[i].update();}
    
};
main();