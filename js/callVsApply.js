function miFuncion(nombre, edad, profesion){
	console.log("Hola, mi nombre es "+ nombre + ", tengo " + edad + " años y mi profesión es " + profesion);
	console.log("Por cierto, el valor de this es: " + this);
}

miFuncion("Yves", 25, "Ingeniero en computación");

var o = {
	a: "hola",
	toString: function(){
		return "hola a todos";
	}
};

miFuncion.apply(o, ["Aplicantino", 10, "Aplicante"]);
miFuncion.call(undefined, "Callantino", 20, "Caller");