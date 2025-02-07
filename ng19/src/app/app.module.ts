import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from "./gender.pipe";
import { TaxPipe } from "./tax.pipe";

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,AnotherComponent,NestedComponent,GenderPipe,
        TaxPipe
    ],
    bootstrap:[AppComponent,AnotherComponent]
})
export class AppModule{}