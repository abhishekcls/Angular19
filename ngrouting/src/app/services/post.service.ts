import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostbyID(id:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  savePost(post:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post);
  }
}
