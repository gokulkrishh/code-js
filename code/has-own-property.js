/*
	# hasOwnProperty (objects) - method returns a boolean by checking, if the property of the object is its own property or not and it doesn't 
		look at the prototype chain of the object.
	
	## Reference 
	1. http://stackoverflow.com/questions/9396569/javascript-what-is-property-in-hasownproperty
	2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
*/

// Example 1
var myObj = {
	a: 10,
	b: 20
};

// Setting a value in `myObj` prototype
Object.prototype.z = 30;

console.log(myObj.a); //10
console.log(myObj.hasOwnProperty('a')); // true
console.log(myObj.z); // 30, because javascript look upto its prototype chain to check if property/method is present or not.
console.log(myObj.hasOwnProperty('z')); // false

// Example 2
var myNewObj = new Object();
myNewObj.name = "Gokul";

console.log(myNewObj.hasOwnProperty('name')); // true

// Adding a method 
myNewObj.print = function() {
	return this.name;
};

// Checking `print` is present in `myNewObj`
console.log(myNewObj.hasOwnProperty('print')); // true

// You can also check `hasOwnProperty` method present in `myNewObj`
console.log(myNewObj.hasOwnProperty('hasOwnProperty')); // false

// Above return's false, because `hasOwnProperty` method is present in `Object's prototype`.
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

