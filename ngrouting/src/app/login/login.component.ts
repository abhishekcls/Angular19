import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submit(data:any){
    console.log(data);
    if(data.uid=='admin' && data.pass=='12345'){
      alert('login success')
      sessionStorage.setItem('user','admin');
    }
    else
      alert('login failure')
  }
}
