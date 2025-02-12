import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  posts:any;
  constructor(private ps:PostService){
    ps.getPosts().subscribe(p=>this.posts=p)
  }

  submit(post:any)
  {
    console.log('before post',post);
    this.ps.savePost(post).subscribe(p=>{console.log('after post',p);this.posts.push(p)});
  }
}
