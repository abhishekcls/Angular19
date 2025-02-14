import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c1',
  standalone: false,
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component implements OnInit,OnDestroy {
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
