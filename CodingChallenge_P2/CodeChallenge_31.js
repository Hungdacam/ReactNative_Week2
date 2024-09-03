function numberOfWords(text){
    text=text.trim();
    var textLength=text.length;
    if (textLength===''){
        return 0;
    }
    var words = text.split(/\s+/);
    return words.length;
    
}

var text='hung dang hoc javascript';
console.log(numberOfWords(text));
