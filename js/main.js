// Tapshiriq 2 //

function realnum (num1,num2) {
    if (num1<0 && num2<0) {
        return math.abs(num1) && math.abs(num2);
    } else if (num1<0 || num2<0) {
        return (num1+0.5) && (num2+0.5);
    } else if ((num1>0 && num2>0)) && ((0.5>num1,num2) && (num1,num2<2.0)) {
        return (num1/10 && num2/10);
    } else {
        return (num1,num2);
    }
}

console.log ( realnum (-5, 3) ) 
console.log ( realnum (5, -3) )
console.log ( realnum (0.1, 3) )




// Tapshiriq 3 //

let num1 = Number (prompt("Birinci reqemi daxil edin"));
let num2 = Number (prompt("Ikinci reqemi daxil edin"));
let cutededlerincemi = 0

for(let i=num1; i <= num2; i++){
    if(i % 2 == 0) {
        cutededlerincemi += i;
    }  
}
   
console.log(cutededlerincemi);