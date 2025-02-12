import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserdetailComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
