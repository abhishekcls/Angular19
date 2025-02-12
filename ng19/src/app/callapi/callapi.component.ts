import { Component } from '@angular/core';
import { RestApiService } from '../restapi.service';

@Component({
  selector: 'app-callapi',
  standalone: false,
  templateUrl: './callapi.component.html',
  styleUrl: './callapi.component.css'
})
export class CallapiComponent {
  data:any;
  constructor(api:RestApiService){//DI
    api.getData().subscribe(d=>this.data=d)
  }
}
