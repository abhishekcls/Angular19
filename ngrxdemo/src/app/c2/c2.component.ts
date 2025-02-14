import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-c2',
  standalone: false,
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
counter:number=0;
  s?:Subscription;
  ds=inject(DataService);//DI
  
  increment(){
    this.ds.increment();
  }
  decrement(){
    this.ds.decement();
  }
}
