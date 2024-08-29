var arr=[5,10,15,20];

// reduce: tra ve bien tich luy. 
// can khoi tao gia tri khoi tao
// neu ko co initialValue thi vong lap se bat dau tu vi tri so 2, tuc la i=1 
// vi accumulator trong truong hop ko co intitialValue no se tich luy phan tu so 1 roi
Array.prototype.reducefn = function(callbackfn,initialValue){
    var accumulator = initialValue !== undefined ? initialValue: this[0];
    var startIndex = initialValue !== undefined ? 0:1;
    for (var i=startIndex;i<this.length;i++){
        accumulator=callbackfn(accumulator,this[i],i,this);
    }
    return accumulator;
};

var result=arr.reducefn((sum,value)=>sum+=value);

console.log(result);