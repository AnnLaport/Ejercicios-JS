const empleados= ["Susanne","Laporte","Gray","Harriet"];
const  clientes=["Haydem","Carrasco","Elizabeth"];

//1.- La respuesta que yo creo es la mejor; concat()

const contactos= empleados.concat(clientes);
console.log("Respuestas del ejercicio 1:");
console.log(contactos); //output: ["Susanne","Laporte","Gray","Harriet","Haydem","Carrasco","Elizabeth"]

//2. Resultado con push
const contactos2= [...empleados];
contactos2.push(clientes);
console.log(contactos2);

//Push y splice meten el arreglo entero dentro del arreglo, se necesitaria otra funcion como flat/flatmap para combinarlos

//3. Resultad con splice

const contactos3= [...empleados];
contactos3.splice(empleados.length, 0, clientes)
console.log(contactos3);

//4. Resultado con join: no regresaria un arreglo, regresa una cadena y no los combinaría

console.log(empleados.join('-'));
console.log(empleados);
