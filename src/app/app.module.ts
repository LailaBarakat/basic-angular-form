import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//In your app.module.ts, import the FormsModule from @angular/forms. Also add it to the imports array.
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
