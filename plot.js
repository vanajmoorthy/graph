// const math = require('mathjs');

var totalSize = 50;
var userIn = "sin(5)";
var res;
var inp;

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent("sketch-div");
	angleMode(DEGREES);
}
function draw() {
	background(245);
	fill(0);
	translate(width / 2, height / 2);
	scale(1.0, -1.0);

	stroke(0);
	strokeWeight(1);

	let negWidth = -width - 2;
	let posWidth = width / 2;

	let negHeight = -height / 2;
	let posHeight = height / 2;

	line(negWidth, 0, posWidth, 0);

	line(0, negHeight, 0, posHeight);



	for (let i = negWidth; i < posWidth; i++) {
		if (parseInt(i / totalSize) === i / totalSize) {
			line(i, 5, i, -5);
		}
	}

	for (let j = negHeight; j < posHeight; j++) {
		if (parseInt(j / totalSize) === j / totalSize) {
			line(5, j, -5, j);
		}
	}

	rotate(180);

	// COME BACK TO THIS LATER, NUMBERS TO THE AXES

	// for (let i = -width / 2; i < width / 2; i++) {
	// 	if (parseInt(i / totalSize) === i / totalSize) {
	//         // rotateZ(0);
	// 		text(-i, i, 0);
	// 	}
	// }

	// 255, 121, 63
	plotFn(f, [255, 121, 63]); //plot fam
}

function plotFn(f, color) {
	stroke(color);
	strokeWeight(2);

	for (let i = -width / 2; i < width / 2; i += 0.1) {
		out = f(i / totalSize) * totalSize;
		point(i, out);
	}
}

function updateFn() {
	userIn = document.getElementById("inputFn").value;
}

function updateSc() {
	totalSize = parseFloat(document.getElementById("inputSc").value);
}

function f(x) {
	math.eval(userIn);
	return math.eval(userIn);
}
