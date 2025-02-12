import { Component } from '@angular/core';
import { RestApiService } from '../restapi.service';

@Component({
  selector: 'app-detailapi',
  standalone: false,
  templateUrl: './detailapi.component.html',
  styleUrl: './detailapi.component.css'
})
export class DetailapiComponent {
  path='https://appbucket22.s3.us-east-1.amazonaws.com/lotus.gif'
  basepath='https://appbucket22.s3.us-east-1.amazonaws.com'
  userdata:any;

  flag:boolean=false

  constructor(private api:RestApiService){
  }
  submit(data:any){
    this.api.getDataByID(data.id).subscribe(u=>this.userdata=u);
  }

  show(){
    alert('Hello')
  }
}
