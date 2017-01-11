/*
	# Hoisting - All variable declarations inside/outside the function is hoisted at the top. This is true for function declaration as well.
	
	## Reference 
	1. https://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092
	2. https://www.sitepoint.com/back-to-basics-javascript-hoisting/
*/

// Example and see below for explanation
console.log(x); // undefined
var x = 10; // Global variable

funz(); // Below function is available here too, since it is also hoisted at the top.

function funz() {
	console.log(y); // undefined
	var y = 20; // Local variable
	console.log(y); // 20
}

console.log(x); // 10

// Above example goes like below javascript
var x; // Declaration
console.log(x); // undefined
x = 10; // Initialization

funz(); // Hoisting a function is true only for function declaration, not for function expression.

function funz() {
	var y; // Declaration
	console.log(y); // undefined
	y = 20; // Initialization
	console.log(y); // 20
}

console.log(x); // 10