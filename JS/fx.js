//1
function abc(){
    console.log("Standard")
}

abc()

//2
var xyz=function(){
    console.log("Anonymous")
}

xyz();

//3
(function(){
    console.log("IIFE")
})()

function add(a,b){
    return a+b;
}

var r=add(2,3)
console.log(r)