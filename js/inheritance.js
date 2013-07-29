//Maneras de crear objetos  
//-------1.- Haciendo uso de sintaxis-----
var obj = {
	prop1: "prop1",
	prop2: 2
};
//esto crea un objeto llamado "obj" tiene a Object.prototype como su prototipo


console.log(obj.hasOwnProperty("prop1")); //hasOwnProperty es una función de Object.prototype
console.log(obj.hasOwnProperty("toString"));
//el prototipo de Object es null
// obj --> Object.prototype --> null

var arreglo = ["foo", "bar", "baz"];

console.log(arreglo.indexOf("bar"));
console.log(arreglo.hasOwnProperty("indexOf"));

//Los arreglos heredan de Array.prototype, el cual a su vez hereda de Object.prototype
// arreglo --> Array.prototype --> Object.prototype --> null

function funcion(){
	return "hola";
}

//Las funciones heredan de Function.prototype 
// funcion --> Function.prototype --> Object.prototype --> null
console.log(funcion.name);


//------ 1.- Con un constructor --------
function Persona(nombre, edad){
	this.nombre = nombre;
	this.edad = edad;
}

Persona.prototype.saluda = function(){
	return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
};

var beto = new Persona("Beto", 20);
console.log(beto.saluda());


//------------Object.create (ECMAScript 5+)------------

var a = {propA: 1}; //a -->Object.prototype --> null

var b = Object.create(a); // b --> a -->Object.prototype --> null
b.propB = 2;

var c = Object.create(b); //c --> b --> a -->Object.prototype --> null
c.propC = 3;

var d = Object.create(null); //d -->null
d.propD = 4;
console.log(d.hasOwnProperty);