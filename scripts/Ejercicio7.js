const personArray=[
    {
        "personid": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneno":"1234567898"
    },
    {
        "personid": 124,
        "name": "Sara",
        "city": "Ottawa",
        "phoneno":"1234567899"
    },
    {
        "personid": 125,
        "name": "Susanne",
        "city": "Sydney",
        "phoneno":"1234567897"
    },
    {
        "personid": 126,
        "name": "Sophie",
        "city": "Adelaide",
        "phoneno":"1234567798"
    }
]

let row= document.querySelector('tbody');


let templatePersons=personArray.map((person)=>
    `
    <tr>
                    <td>${person.personid}</td>
                    <td>${person.name}</td>
                    <td>${person.city}</td>
                    <td>${person.phoneno}</td>
     </tr>
    `
).join('');

row.innerHTML=templatePersons;