import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter:number=0;

  counterChange=new Subject<number>();
 
  increment(){
    this.counter++;
    this.counterChange.next(this.counter);
  }
  decement(){
    this.counter--;
    this.counterChange.next(this.counter);
  }
}
