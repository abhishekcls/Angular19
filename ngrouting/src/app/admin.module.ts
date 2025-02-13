import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './admin/c1/c1.component';
import { C2Component } from './admin/c2/c2.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path:'',redirectTo:'c1',pathMatch:'full'},
      { path: 'c1', component: C1Component },
      { path: 'c2', component: C2Component }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminModule { }
