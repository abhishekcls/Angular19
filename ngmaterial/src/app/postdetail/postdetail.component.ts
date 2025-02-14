import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent implements OnInit, OnDestroy{
  post?:Post;
  id:string;
  s:Subscription;
  constructor(ar:ActivatedRoute,ps:PostService){
    console.log('cons');
    this.id=ar.snapshot.params['id'];
    this.s= ps.getPostbyID(this.id).subscribe(p=>this.post=p);
  }
  ngOnInit(): void {
    console.log('init');
  }
  ngOnDestroy(): void {
    console.log('destroy')
    this.s.unsubscribe();
  }
}
