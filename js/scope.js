var x = 1;
console.log(x); // 1
if (true) {
	var x = 2;
	console.log(x); // 2
}
console.log(x); // 2

function foo() {
	var x = 1;
	console.log(x);
	if (x) {
		(function () {
			var x = 2;
			console.log(x);
			// ...
		}());
	}
	console.log(x);
}

foo();