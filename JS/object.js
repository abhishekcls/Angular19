var emp={"eid":100,"ename":"Rajiv"}

console.log(emp, typeof emp)
console.log(emp.eid,emp.ename)
console.log(emp["eid"],emp["ename"])//recommended

for(var e in emp){
    console.log(e,emp[e]);
}

console.log(Array.isArray(emp))