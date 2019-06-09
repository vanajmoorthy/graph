var originalSize = 50;
var userIn = "sin(x)";
var res;
var inp;
var shouldDraw = true;

var negWidth;
var posWidth;

var negHeight;
var posHeight;
// const mathjs = require("mathjs");
// const p5 = require("p5");

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent("sketch-div");
	angleMode(DEGREES);
}

function draw() {
	if (shouldDraw) {
		// 29,167,234 = blue;
		background(251);
		fill(0);
		translate(width / 2, height / 2);

		scale(1.0, -1.0);

		stroke(0);
		strokeWeight(1);

		negWidth = -width - 2;
		posWidth = width / 2;

		negHeight = -height / 2;
		posHeight = height / 2;

		line(negWidth, 0, posWidth, 0);

		line(0, negHeight, 0, posHeight);

		for (let i = negWidth; i < posWidth; i++) {
			if (parseInt(i / originalSize) === i / originalSize) {
				line(i, 5, i, -5);
			}
		}

		for (let j = negHeight; j < posHeight; j++) {
			if (parseInt(j / originalSize) === j / originalSize) {
				line(5, j, -5, j);
			}
		}

		rotate(180);

		// COME BACK TO THIS LATER, NUMBERS TO THE AXES

		// for (let i = -width / 2; i < width / 2; i++) {
		// 	if (parseInt(i / originalSize) === i / originalSize) {
		//         // rotateZ(0);
		// 		text(-i, i, 0);
		// 	}
		// }

		// 255, 121, 63

		plotFn(f, [255, 121, 63]); //plot fam
		shouldDraw = false;
	}
}

function plotFn(f, color) {
	stroke(color);
	strokeWeight(2);

	for (let i = negWidth; i < posWidth; i += 0.1) {
		out = f(i / originalSize) * originalSize;
		point(i, out);
	}
}

function updateFn() {
	userIn = document.getElementById("inputFn").value;
	shouldDraw = true;
}

function updateSc() {
	originalSize = parseFloat(document.getElementById("inputSc").value);
	shouldDraw = true;
}

function f(x) {
	// console.log(x);
	return math.eval(userIn, { x });
}

window.onload = function() {
	var input = document.getElementById("inputFn");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			document.getElementById("updateF").click();
		}
	});

	var input = document.getElementById("inputSc");

	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			document.getElementById("updateS").click();
		}
	});
};
