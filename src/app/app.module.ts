import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Highlight} from "./highlight";
import {Loop} from "./loop";
import {User} from "./user";

@NgModule({
  declarations: [
    AppComponent,
    Highlight,
    Loop,
    User
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
