
let bdy= document.querySelector('body');
let section= document.createElement('section');
let titulosec=document.createElement('h1');
let paragraphs=document.createElement('p');



section.style.border= "1px solid black";
section.style.display="inline";
section.style.padding="1rem";
section.style.position="absolute";
section.style.top=200;
section.style.left=299;

section.appendChild(titulosec);
section.appendChild(paragraphs);
bdy.appendChild(section);

window.addEventListener('mousemove' ,(e)=>{

    section.style.left=`${e.x}px`;
    section.style.top=`${e.y}px`;
    titulosec.innerHTML="Ratón"
    paragraphs.innerHTML= "Pàgina: "+e.x+", "+e.y;

})

window.addEventListener('keypress', (e)=>{
    titulosec.innerHTML="Teclado";
    paragraphs.innerHTML= "Carácter: "+e.key;
})


