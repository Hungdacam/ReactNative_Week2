
//cách 1: for
function distinctElements(arr){
    var arrLength= arr.length;
    var uniqueArray=[];
    for (var i=0; i<arrLength; i++){
        if(!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
    }
    }
    return uniqueArray;
}

//cách 2: set + toan tu spread
function distinctElements2(arr) {
    return [...new Set(arr)];
}



var arr=[1,2,3,4,5,5,4,3,2,1,0]


console.log(distinctElements(arr))
console.log(distinctElements2(arr))