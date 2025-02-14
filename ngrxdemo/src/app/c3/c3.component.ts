import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-c3',
  standalone: false,
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {
counter:number=0;
  s?:Subscription;
  ds=inject(DataService);//DI

  
  ngOnInit(): void {
    this.s=this.ds.counterChange.subscribe(c=>this.counter=c);
  }
  ngOnDestroy(): void {
    if(this.s)
      this.s?.unsubscribe();
  }
}
