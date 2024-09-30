let myArray=[4,1,3,2];

function getMinMax(myArray){

    let minMax={};

    myArray.sort((a,b)=>a-b);

    minMax={...minMax};
    minMax.minimo= myArray[0];
    minMax.maximo=myArray[myArray.length-1];

    return minMax;
}

console.log(getMinMax(myArray));