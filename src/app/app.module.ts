
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
