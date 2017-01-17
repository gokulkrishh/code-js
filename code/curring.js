// /*
// 	# Curring - is a process of taking `n` arguments and transforming into `n` functions which accepts one argument.

// 	## Reference 
// 	1. https://www.sitepoint.com/currying-in-functional-javascript/
// 	2. https://egghead.io/lessons/javascript-what-is-currying
// */

// // Example

// // Currying function
// var curryIt = function(funz) {
// 	var args = Array.prototype.slice.call(arguments, 1); // To convert arguments into actual Array of arguments
// 	return function() {
// 		return funz.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
// 	}
// }

// // Sample function

// function funz1(a, b) {
// 	return a + b;
// }

// var curriedFunz = curryIt(funz1);

// console.log(curriedFunz(1, 2)); // 3

// console.log(curriedFunz(10, 50)); //60