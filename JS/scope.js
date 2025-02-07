var a=100//global

function abc(){
    var b=200;//global
    console.log(a,b);
}
abc();
console.log(a)//100 global scope
console.log(b);