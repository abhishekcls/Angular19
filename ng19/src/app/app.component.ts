import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    standalone:false,
    templateUrl:`app.component.html`,
    styles:[
        `.c1{color:blue}`,
        `#head{
            color:maroon
        }
        .high{
            color:red
        }
        .low{
            color:green
        }
        `
    ]
})
export class AppComponent{
    nname:string='';
    name:string='Abhishek';
    games:string[]=['hockey','cricket','polo']
    emp={'eid':101,'ename':'Karan'};
    emps=[
        {'eid':1001,'ename':'Tarun','gender':'M','sal':45000,'retired':false,'doj':new Date("2011-01-05")},
        {'eid':1002,'ename':'Priya','gender':'F','sal':77000,'retired':false,'doj':new Date("2015-02-04")},
        {'eid':1003,'ename':'Praveen','gender':'M','sal':125000,'retired':true,'doj':new Date("1985-11-11")},
        {'eid':1004,'ename':'Kavita','gender':'F','sal':85000,'retired':true,'doj':new Date("1980-05-07")},
        {'eid':1005,'ename':'Gaurav','gender':'M','sal':75000,'retired':false,'doj':new Date("2017-09-09")}
    ]
    constructor(){
        this.name='Abhishek Samanta';
    }
}