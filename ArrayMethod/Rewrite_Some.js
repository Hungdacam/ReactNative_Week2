var arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.somefn=function(callbackfn){

    var value;
    var flag=false;
    for (var i=0;i<this.length;i++){
        var check=callbackfn(this[i]);
        if (check) {
            flag=true; 
            return flag;
        }
        else continue;
    }
};

var result=arr.somefn(num=>num>0);

console.log(result);