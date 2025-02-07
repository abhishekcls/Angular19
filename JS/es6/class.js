class Demo{
    a=10
    constructor(a){
        this.a=a;
        console.log("cons")
    }
    disp(){
        console.log("hello")
    }
}

let d=new Demo(11);//object
d.disp();
console.log(d,typeof d)