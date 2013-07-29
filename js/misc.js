var misc =  (function(){

	var testTimer = function(){
		var inicio = new Date(),
			fin;
		console.log(inicio.toTimeString() +  ": Configurando un timer para que se ejecute en 1 segundo.");
		setTimeout(function(){
			fin = new Date();
			console.log("Función de timeout (1000ms) ejecutada " + (fin-inicio) + " milisegundos después");
		}, 1000);

		while(new Date().getTime() < (inicio.getTime() + 5000)); // jamás hagan esto... estrictamente para comprobar un punto.
		console.log("después del delay feo");

	};

	var firstClass = function(){

		// 3. Una función puede ser guardada en una variable
		var miFuncion = function(){
			return "Soy una función";
		};

		//1. una función es una instancia de Object
		console.log(miFuncion instanceof Object);

		//2. una función puede tener propiedades y tiene enlace a su constructor
		miFuncion.prop1 = "propiedad 1";
		console.log(miFuncion.prop1);
		console.log(miFuncion.constructor);

		//4. puedes pasar una función como parámetro a otra función.
		var miFuncionConParametros = function(func){
			console.log(func());
		};

		miFuncionConParametros(miFuncion);

		//5. - una función puede ser el return value de otra función.
		var miFuncionQueRegresaOtraFuncion = function(){
			return miFuncionConParametros(miFuncion);
		};

		miFuncionQueRegresaOtraFuncion();

	};
	/*
	var testStrict = function(){
		"use strict";

		// ***tratar de asignarle un valor a una variable que no ha sido definida
		//foo = "bar"; //Uncaught Reference: foo is not defined		

		var obj = {};
		Object.defineProperty(obj, "prop1", {
			value: "mi propiedad no editable/configurable",
			writtable: false,
			configurable: false
		});
		obj.prop2 = "mi propiedad editable";

		//***tratar de escribir a una propiedad cuyo atributo "writtable" sea false
		//obj.prop1 = "intento de edición a propiedad writtable=false"; //Uncaught TypeError: Cannot assign to read only property 'prop1' of #<Object> 
		obj.prop2 = "intento de edición a propiedad writtable=true";

		//***tratar de eliminar una propiedad cuyo atributo "configurable" sea false
		//delete obj.prop1;
		delete obj.prop2;

		//***tratar de eliminar una variable, una función o un argumento
		var variable = "variable";
		function funcion(){}

		//delete variable; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. 
		//delete funcion; //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. 
		//function funcionArg(argumento){
		//	delete argumento; //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode. 
		//}

		//****Cualquier intento de utilizar 'eval' está prohibido, así como la habilidad de asignar eval como propiedad de un objeto
		// Todos los siguientes generan errores...
		// obj.eval = ...
		// obj.foo = eval;
		// var eval = ...;
		// for ( var eval in ... ) {}
		// function eval(){}
		// function test(eval){}
		// function(eval){}
		// new Function("eval")

		//*** Intentar sobreescribir el objeto "arguments"
		arguments = ['a', 'b'];

		//***Intentar definir argumentos con el mismo nombre
		function (foo, foo) {}

		//*** intentar acceder a "arguments.caller" o "arguments.callee" arrojan excepción.
		// por lo tanto, si necesitas llamar una función anónima necesitarán un nombre.
		setTimeout(function miCallback(){
			console.log(arguments.caller);
			console.log(arguments.callee);
			setTimeout(miCallback, 1000);
		}, 1000);

		//*** ya no existen las propiedades 'arguments' y 'caller' de otras funciones.
		function test(){
			function inner(){
				console.log(test.arguments);
				console.log(test.caller);
			};
		};
	};

	*/
	var testThis = function(){

		//object's method
		var persona =  {
			nombre: "foo",
			getNombre: function(){
				return this.nombre;
			}
		};

		console.log(persona.getNombre());

		//constructor
		function Persona(nombre){
			this.nombre = nombre;
			this.getNombre = function(){
				return this.nombre;
			};
		}

		var bar = new Persona("bar");
		console.log(bar.getNombre());

		//function call
		function test_this(){
			return this;
		}

		console.log(test_this());
		console.log(new test_this());
		console.log(test_this.apply(document));
		console.log(test_this.call(navigator));

	};

	var noReturn = function(){
		function funcionSinReturn(){}
		console.log(funcionSinReturn());
		console.log(new funcionSinReturn());
	};

	return {
		timer: testTimer,
		firstClass: firstClass,
		//testStrict: testStrict,
		testThis: testThis,
		clickHandler: clickHandler,
		noReturn: noReturn
	};

}());

//misc.timer();
//misc.firstClass();
//misc.testStrict();
//misc.testThis();
//misc.noReturn();

var btn =  document.getElementById("noObtruso");
btn.addEventListener("click", clickHandler);
function clickHandler(){
	console.log(this);
}