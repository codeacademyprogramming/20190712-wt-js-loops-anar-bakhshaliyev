function realnum (num1,num2) {
    if (num1<0 && num2<0) {
        return math.abs(num1) && math.abs(num2);
    } else if (num1<0 || num2<0) {
        return (num1+0.5) && (num2+0.5);
    } else if ((num1>0 && num2>0)) && ((0.5>num1,num2)&&(num1,num2<2.0)) {
        return (num1/10 && num2/10);
    } else {
        return (num1,num2);
    }
}

console.log ( realnum (-5, 3) ) 
console.log ( realnum (5, -3) )
console.log ( realnum (0.1, 3) )