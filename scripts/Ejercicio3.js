const personas=[
    {
        id: 1,
        name: "John",
        age: 28
    },
    {
        id: 2,
        name: "Jane",
        age: 31
    },
    {
        id: 3,
        name: "Peter",
        age: 55
    }
]

personasMenores55= personas.filter((persona)=>persona.age<35);
console.log(personasMenores55);