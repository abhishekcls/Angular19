import { Component, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnDestroy{
  posts:Post[];
  //posts?:Post[];
  s:Subscription;
  constructor(private ps:PostService){
    this.posts=[]
    this.s=ps.getPosts().subscribe(p=>this.posts=p)
  }

  submit(post:Post)
  {
    console.log('before post',post);
    this.ps.savePost(post).subscribe(p=>{console.log('after post',p);this.posts.push(p)});
    //this.ps.savePost(post).subscribe(p=>{console.log('after post',p);this.posts?.push(p)});
  }

  ngOnDestroy(){
    console.log('post destroy')
    this.s.unsubscribe();
  }
}
