import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit,OnDestroy{
  s?:Subscription;
  users:any;

  us=inject(UserService);//DI

  ngOnInit(){
    this.s= this.us.getUsers().subscribe(u=>this.users=u);
  }

  ngOnDestroy(): void {
    this.s?.unsubscribe();
  }
}
