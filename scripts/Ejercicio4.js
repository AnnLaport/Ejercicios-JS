//Asignar los valores a las llaves del objeto con "=" genera un SyntaxError
const personas=[
    {
        name:"Bob",
        id: 1
    },
    {
        name:"John",
        id: 2
    },
    {
        name:"Alex",
        id: 3
    },
    {
        name:"John",
        id: 3
    }
]

//Genere la funcion para obtener el número de veces que aparecer cada nombre

function numberPerName(){
    const names= new Set(personas.map((person)=>person.name));
    let obj2={};
    const array2=[];
    let count=0;

    names.forEach(element => {
        
        count=0;
        for(let i=0; i<personas.length; i++){
            if(personas[i].name===element)
                count++;
        }

        obj2={...obj2}; 
        obj2.count=count;
        obj2.name= element;
        
        
        array2.push(obj2);
    });

    return array2;
}

console.log(numberPerName());

