var arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.findfn=function(callbackfn){

    var value;
    var check;
    for (var i=0;i<this.length;i++){
        check = callbackfn(this[i]);
        if (check==true) {
            return this[i];
        } else continue;
    }
};

var result=arr.findfn(num=>num>9);

console.log(result);