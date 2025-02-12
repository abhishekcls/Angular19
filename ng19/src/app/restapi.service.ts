import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class RestApiService{
    constructor(private http:HttpClient){//DI
    }

    getData(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    getDataByID(id:string){
        //return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
}