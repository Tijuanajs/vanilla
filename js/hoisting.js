(function(){

var a = 10;

function ejemploHoist(){
	return a;
	var a=1337;
}

var b = ejemploHoist();
console.log(b);

}());

// A quién le sucede y a quien no

(function(){


//foo(); // TypeError "foo is not a function"
bar(); // valido
//baz(); // TypeError "baz is not a function"
//spam(); // ReferenceError "spam is not defined"

var foo = function () {}; // anonymous function expression ('foo' gets hoisted)
function bar() {}; // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {}; // named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid
//spam(); // ReferenceError "spam is not defined"

}());