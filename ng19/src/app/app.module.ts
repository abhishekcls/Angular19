import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from "./gender.pipe";
import { TaxPipe } from "./tax.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { DemoPipe } from './demo.pipe';
import { provideHttpClient } from "@angular/common/http";
import { CallapiComponent } from './callapi/callapi.component';
import { DetailapiComponent } from './detailapi/detailapi.component';

@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    declarations:[AppComponent,AnotherComponent,NestedComponent,GenderPipe,
        TaxPipe,
        TformComponent,
        RformComponent,
        DemoPipe,
        CallapiComponent,
        DetailapiComponent
    ],
    bootstrap:[AppComponent,AnotherComponent],
    providers:[provideHttpClient()]
})
export class AppModule{}