let xyz=()=>{
    console.log("Anonymous")
}

xyz();

// function add(a,b){
//     return a+b;
// }

let add=(a,b)=>a+b;

let r=add(2,3)
console.log(r)

let square=a=>a*a;

console.log(square(5))