const numbers= [5,32,43,4];

const nones= numbers.filter(function(n){ return n%2!==0});

//output: [5,43]; porque la funcion de prueba proporcionada al filter indica 
//que regresarà los elementos cuyo residuo por dividir entre 2 sea diferente de 0
// es decir, los números impares.

console.log(nones);