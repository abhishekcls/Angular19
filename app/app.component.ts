import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    standalone:false,
    template:`<h1>Hello KPMG Angular19 Demo by {{name}}</h1>
    {{games}}
    <ol>
        <li *ngFor="let g of games">{{g}}</li>
    </ol>
    {{emp.eid + " "+ emp.ename}}
    {{emp.eid}} {{emp.ename}}
    {{emp | json}}
    <table border="1">
        <tr *ngFor="let e of emps">
            <td>{{e.eid}}</td>
            <td>{{e.ename}}</td>
            <td>{{e.ename | uppercase}}</td>
            <td>{{e.ename | slice:2}}</td>
            <td>{{e.ename | slice:2:4}}</td>
            <td>{{e.gender | gen}}</td>
            <td>{{e.sal}}</td>
            <td>{{e.sal | number}}</td>
            <td>{{e.sal | currency}}</td>
            <td>{{e.sal | currency:"INR"}}</td>
            <td>{{e.sal | tax:0.2 | currency:"INR"}}</td>
            <td>{{e.sal | tax}}</td>
            <td>{{e.retired}}</td>
            <td>{{e.doj | date}}</td>
            <td>{{e.doj | date:"d/M/y"}}</td>
            <td>
                <img *ngIf="e.retired" src="https://www.icegif.com/wp-content/uploads/2022/04/icegif-931.gif" height="200" width="250"/>
                <img *ngIf="!e.retired" src="https://i.pinimg.com/originals/d9/98/d1/d998d123da2480eb9fa1baded88830e1.gif" height="200" width="250"/>
            </td>
        </tr>
    </table>
    <nested></nested>`
})
export class AppComponent{
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