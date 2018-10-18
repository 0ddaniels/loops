// For-loop functions

function positiveIntSum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
         sum = sum + i;
    }
return sum;

}


function additionPatternSum(start, diff, limit){
    let sum = start;
    for(let k = 1; k <= limit; k++){
        sum = sum + diff*k;
    }
return sum;

}




// While-loop function

function multiplicationPatternSum(start, factor, max){
    let sum = start;
    let k = start;
    while(k <= max){
        sum = sum + factor*k;
    }

return sum;

}





//Later copy paste the checking code below here.
//Declarion of checking code
console.log(positiveIntSum(2000000))
console.log(additionPatternSum(-80, 60, 50))
console.log(multiplicationPatternSum(4, 3, 50000))