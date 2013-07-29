var persona = (function(){
	var nombre ='Foo Bar',
		edad = 1337;

	return {
		getNombre: function(){
			return nombre;
		},
		setNombre: function(nuevoNombre){
			nombre = nuevoNombre;
		},
		getEdad: function(){
			return edad;
		},
		setEdad: function(nuevaEdad){
			edad = nuevaEdad;
		}
	};

})();


console.log(persona.getNombre());
console.log(persona.getEdad());
console.log(persona.nombre); //undefined
console.log(persona.edad);  // undefined
persona.setNombre('Bar Baz');
persona.setEdad('9001');
console.log(persona.getNombre());
console.log(persona.getEdad());