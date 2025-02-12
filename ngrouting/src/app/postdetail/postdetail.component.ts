import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent {
  post:any;
  id:string;
  constructor(ar:ActivatedRoute,ps:PostService){
    this.id=ar.snapshot.params['id'];
    ps.getPostbyID(this.id).subscribe(p=>this.post=p);
  }
}
