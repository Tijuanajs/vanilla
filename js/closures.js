function creaSumador(a){
	return function(b){
		return a + b;
	};
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(1));
console.log(suma10(1));