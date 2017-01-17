/*
	# Native method - Adding a native methods to javascript so that it is available for particular operation.

	Example: 

	[1, 2].duplicate(); // [1, 2]
	
	## Reference 
	1. https://scotch.io/tutorials/learning-javascript-native-functions-and-how-to-use-them#filter
	2. http://stackoverflow.com/questions/5024085/whats-the-point-of-slice0-here
*/

// Example
Array.proptype.duplicate = function() {
	return this.slice(0); // This points to array you are going to duplicate
};

console.log([1,2,3].duplicate()); // [1,2,3]