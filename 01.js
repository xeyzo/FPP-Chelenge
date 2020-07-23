function reverse(param){
    var x = param.length, y = '';
    while(x > 0){
        y += param[x - 1];
        x--;
    }
    return y;
}
const kata = prompt("masukan kalimat :");
if(kata === reverse(kata)){
    console.log("kalimat `"+kata+"` termasuk kata Palindrome.");
}
else{
    console.log("kalimat `"+kata+"` bukan termasuk kata Palindrome.");
}