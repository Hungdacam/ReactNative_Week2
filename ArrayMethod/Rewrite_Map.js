var arr=[2,3,4,5];


Array.prototype.mapfn= function(callbackfn){
    var nArr=[];
    var value;
    for (var i=0;i<this.length; i++){
        value=callbackfn(this[i]);
        nArr.push(value); 
    }
    return nArr;
};
//Nhan doi cac gia tri so trong mang
var newArr=arr.mapfn(num=>num%2==0);


console.log(newArr);
