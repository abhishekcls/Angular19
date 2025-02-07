class Parent{
    constructor(){
        console.log("P cons")
    }
    disp(){
        console.log("Parent")
    }
}
class Child extends Parent{
    constructor(){
        super();
        console.log("C cons")
    }
    disp(){
        console.log("Child")
    }
}

let c=new Child();
c.disp();