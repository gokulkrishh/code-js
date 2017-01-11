/*
	# if() - if statements executes only if's statements evaluation is true.

	# Truth table for if() - https://dorey.github.io/JavaScript-Equality-Table/
*/

// Examples
if (true) {} // executes

if ("true") {} // executes

if (false) {} // does not execute

if ("false") {} // executes

if (1) {} // executes

if (-1) {} // executes

if ("-1") {} // executes

if (0) {} // does not execute

if ("") {} // does not execute

if (undefined) {} // does not execute

if (null) {} // does not execute

if ([]) {} // executes

if ({}) {} // executes