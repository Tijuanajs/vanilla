//*********************Intentos de IIFE **************************

// function(){
// 	console.log("Soy un intento de IIFE"); // SyntaxError: Unexpected token (
// }();

// function foo(){
// 	console.log("Soy el segundo intento de IIFE, pero ahora con nombre"); //SyntaxError: unexpected token )
// }();

function foo(){
	console.log("Soy el tercer intento de IIFE, con nombre y parámetros en paréntesis"); //aqui no pasa nada.
}(1);


//********************* Diferentes formas de hacer IIFEs ***********************


(function(){
	console.log("1.- IIFE usando sintáxis (function){ /* código */ }());"); // la más común
}());

(function(){
	console.log("2.- IIFE usando sintáxis (function){ /* código */ })();"); //también es válida
})();

//Si no te importa el return value, o la posibilidad de hacer que tu código sea más difícil de leer
// te puedes ahorrar un byte usando como prefijo un operador unario

!function(){
	console.log("3.- IIFE usando sintáxis !(function){ /* código */ }();");
}();

~function(){
	console.log("4.- IIFE usando sintáxis ~(function){ /* código */ }();");
}();

-function(){
	console.log("5.- IIFE usando sintáxis -(function){ /* código */ }();");
}();

+function(){
	console.log("6.- IIFE usando sintáxis +(function){ /* código */ }();");
}();

//Otra variación, aunque puede que tenga impacto en el rendimiento.

new function(){
	console.log("7.- IIFE usando sintáxis new (function){ /* código */ };");
};

new function(){
	console.log("8.- IIFE usando sintáxis new (function){ /* código */ }();"); // si ocupas pasar argumentos
};
