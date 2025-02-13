import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { Userdetail2Component } from './userdetail2/userdetail2.component';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { authInterceptor } from './auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { C1Component } from './admin/c1/c1.component';
import { C2Component } from './admin/c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
    UserComponent,
    UserdetailComponent,
    Userdetail2Component,
    PostComponent,
    PostdetailComponent,
    LoginComponent,
    AdminComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
