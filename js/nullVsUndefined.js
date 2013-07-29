(function(){
	var a;
	console.log(typeof(a));
	a = 1;
	console.log(typeof(a));
	a = null;
	console.log(typeof(a));
}());

(function(){
	//Entonces cómo verifico el valor de una variable?

	var u, n = null;
	
	if(!u){ 
		console.log("!u revisa si u es undefined o null (falsey)");
	}

	if(n === null){
		console.log("n===null revisa que u sea estrictamente null");
	}

	if(n == null){
		console.log("n==null revisa que u puede ser nulo, pero si es undefined, también pasa")
	}

	if(u == null){
		console.log("undefined pasa el check de u == null");
	}

	if(typeof u === "undefined"){
		console.log("typeof=== 'undefined' revisa estrictamente que sea undefnied");
	}

	if(u=== undefined){
		console.log("u=== undefined te ahorra unos cuantos bytes y revisa estrictamente que el valor sea undefined");
	}

	if(u==undefined){
		console.log("u== revisa que el valor sea undefined, pero también pasa si es null")
	}

	if(n==undefined){
		console.log("n==undefined pasa");
	}

}());