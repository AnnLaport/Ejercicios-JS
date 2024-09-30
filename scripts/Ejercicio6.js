let obj={
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
}


console.log();

function getKeys(objeto){

    const array=Object.entries(objeto);

    //Uso de toSorted 'just for fun'; la diferencia es que sort modifica el arreglo original, toSorted no, te regresa el nuevo arreglo ordenado
    const array2= array.toSorted((a,b)=>a[1]-b[1]);

    return array2;

}

console.log(getKeys(obj));