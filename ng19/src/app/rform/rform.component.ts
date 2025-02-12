import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  standalone: false,
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  emprform: FormGroup;
  constructor(fb:FormBuilder) {
    /*this.emprform = new FormGroup({
      eid: new FormControl('100',this.eidValidator),
      ename: new FormControl('abc', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]))
    });*/
    this.emprform=fb.group({eid:[],ename:['', [Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]]})
  }

  submit(data: any) {
    console.log(data);
  }

  setvalue(){
    this.emprform.setValue({eid:101,ename:'Abhishek'});
  }
  
  patchvalue(){
    this.emprform.patchValue({ename:'Karan'});
  }

  eidValidator(c:any){
    if(!c.value)
      return null;

    let min=101,max=155;
    let eid=c.value;

    if(eid>=min && eid<=max)
      return null;
    else
      return {'veid':{'min':min,'max':max}}
  }
}
