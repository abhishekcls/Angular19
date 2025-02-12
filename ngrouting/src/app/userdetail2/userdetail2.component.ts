import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail2',
  standalone: false,
  templateUrl: './userdetail2.component.html',
  styleUrl: './userdetail2.component.css'
})
export class Userdetail2Component {
  id:string;
  name:string;
  constructor(ar:ActivatedRoute){
    this.id=ar.snapshot.params['id'];
    this.name=ar.snapshot.params['name'];
  }
}
