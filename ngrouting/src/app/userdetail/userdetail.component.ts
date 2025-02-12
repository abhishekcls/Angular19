import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  standalone: false,
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
  id:string;
  constructor(ar:ActivatedRoute){
    this.id=ar.snapshot.params['id'];
  }
}
