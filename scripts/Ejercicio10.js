let botones= document.querySelectorAll('section button');
let entrada=document.querySelector('input');
let operando1=0;
let operando2=0;
let operador='';
let result=0;
let flag=0;

botones[0].addEventListener('click', ()=>{

    entrada.value+='1';
})

botones[1].addEventListener('click', ()=>{
    
    entrada.value+='2';
})

botones[2].addEventListener('click', ()=>{
    
    entrada.value+='3';
})

botones[4].addEventListener('click', ()=>{
    
    entrada.value+='4';
})

botones[5].addEventListener('click', ()=>{
    
    entrada.value+='5';
})

botones[6].addEventListener('click', ()=>{
    
    entrada.value+='6';
})

botones[8].addEventListener('click', ()=>{
    
    entrada.value+='7';
})

botones[9].addEventListener('click', ()=>{
    
    entrada.value+='8';
})

botones[10].addEventListener('click', ()=>{
    
    entrada.value+='9';
})

botones[13].addEventListener('click', ()=>{
    
    entrada.value+='0';
})

botones[3].addEventListener('click', ()=>{
    
    entrada.value+='x';
})

botones[7].addEventListener('click', ()=>{
    
    entrada.value+='/';
})

botones[11].addEventListener('click', ()=>{
    
    entrada.value+='-';
})

botones[15].addEventListener('click', ()=>{
    
    entrada.value+='+';
})

botones[12].addEventListener('click', ()=>{
    
    entrada.value=0;
})

botones[14].addEventListener('click', ()=>{
    
    let opIndex=(entrada.value).search(/[+-/x]/);
    operador= entrada.value.charAt(opIndex);
    let operandos= entrada.value.split(operador);
    result=operacion(Number(operandos[0]), Number(operandos[1]), operador)
    entrada.value=result;

})


function operacion(op1,op2,sign){
    return sign==='+' ? op1+op2 : sign==='-' ? op1-op2 : sign==='x' ? op1*op2 : op1/op2;
}