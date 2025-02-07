let score=[34,67,88]

// let a=score[0]
// let b=score[1]

let [a,b]=score;//destructure

console.log(a,b)

let [x,...y]=score;//destructure

console.log(x,y)

const emp={"eid":100,"ename":"Rajiv"}
let {eid,ename}=emp;//destructure
console.log(eid,ename);