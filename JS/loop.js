var fruits=['Apple','Banana','Orange']

console.log("=========for==========")
for(var i=0;i<fruits.length;i++)
    console.log(fruits[i])

console.log("=========for..in==========")
for(var i in fruits)
    console.log(i,fruits[i])

console.log("=========while==========")
var i=0;
while(i<fruits.length)
{
    console.log(fruits[i]);
    i++;
}
console.log("=========do..while==========")
var i=0;
do
{
    console.log(fruits[i]);
    i++;
}while(i<fruits.length);

console.log("=========forEach1==========")
function print(v){
    console.log(v);
}
fruits.forEach(print)

console.log("=========forEach2==========")
print=function(v){
    console.log(v);
}
fruits.forEach(print)

console.log("=========forEach3==========")
fruits.forEach(function(v){
    console.log(v);
})