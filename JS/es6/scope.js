let a=100

function abc(){
    let a=200;
    console.log(a);//200
    if(true){
        let a=300;
        a=400;
        console.log(a);//300
    }
    console.log(a);//200
}
abc();
console.log(a)//100
//console.log(b);