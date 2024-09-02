function listPrime(num){
    var number=2;
    var count=0;
    var sum=0;
    var arrPrime=[]; // mang luu snt
    var isPrime=[]; // mang danh dau snt
    //vong lap kiem tra du 100 so chua
    while (count<num){
        //neu neu isprime[number] chua dinh nghia thi co nghia la khong co danh dau no la boi cua 1 so => snt
        if (isPrime[number]===undefined){
            // vi vay add vao mang
            arrPrime.push(number);
            sum+=number;
            //tim duoc 1 so moi dem 1
            count++;
        }   
        // vong for danh dau 
        // number *arrPrime[i] <1e6 la dieu kien de khong tran bo nho
        for (var i=0; i<arrPrime.length && number * arrPrime[i] < 1e6; i++){
            // danh dau phan tu thu number * arrPrime[i] ko phai la snt
            // number=2; arrPrime[0]=2; => isPrime[4]=false => so 4 ko phai snt
            // number=3; arrPrime[0]=2; => isPrime[6]=false => so 6 ko phai snt
            // number=3; arrPrime[1]=3; => isPrime[9]=false => so 9 ko phai snt
            isPrime[number * arrPrime[i]]=false;
            if (number % arrPrime[i] ===0) 
                break;
        }   
        number++;
    }
    number++;
    return sum;
}

console.log(listPrime(100));