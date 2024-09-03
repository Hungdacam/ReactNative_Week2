// Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
//Cách 1:
function sumBigNum(a,b){
    var num1= BigInt(a);
    var num2= BigInt(b);
    let sum= num1 +num2;
    return sum.toString();
}

var a="1111111111111111111111111111111111111111111111";
var b="2222222222222222222222222222222222222222222222";

console.log(sumBigNum(a,b));
//Cach 2:

function addBigNum2(a,b){
    a=a.split('').reverse().join('');
    b=b.split('').reverse().join('');

    var maxLength=Math.max(a.length,b.length);
    var result='';
    var carry=0;

    for (var i=0; i<maxLength; i++){
        var digit1= i<maxLength ? parseInt(a[i]):0;
        var digit2= i<maxLength ? parseInt(b[i]):0;

        var sum=digit1+digit2+carry;

        carry=Math.floor(sum/10);

        result=(sum%10).toString() + result;
    }
    if(carry>0){
        result=carry.toString()+result;
    }
    return result;

}
console.log(addBigNum2(a,b));