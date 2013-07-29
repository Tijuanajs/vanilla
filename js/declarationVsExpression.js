//-******function declaration*****----

function bar(){
	return "function declaration bar()";
}

console.log(bar()); // imprime "function declaration bar()"
console.log(bar); // imprime toda la función



//----------***function definition****--------

// anonymous function expression
var a = function(){
	return "definición de funcion anonima (asignada a var a)";
};

console.log(a());
console.log(a.name); // "" 

// named function expression
var b = function namedFunc(){
	return "definición de funcion con nombre namedFunc (asignada a var b)";
};

console.log(b());
console.log(b.name);

//self invoking function expression o Immediately Invoked Function Expression. 
(function (){
	console.log("Yo soy una función anónima y me llamo a mi misma");
})();