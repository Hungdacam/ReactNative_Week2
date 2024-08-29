var arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.filterfn=function(callbackfn){
    var nArr=[];
    for (var i=0; i<this.length; i++){
        var value=callbackfn(this[i]);
        if (value==true){
            nArr.push(this[i]);
        }
    }
    return nArr;
};

var result=arr.filterfn(num=>num%2==0);

console.log(result);
