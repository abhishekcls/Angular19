import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostbyID(id:string):Observable<Post>{
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',post);
  }
}
