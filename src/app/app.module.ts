import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import { Page3Module } from './page3/page3.module';
import { Page4Module } from './page4/page4.module';
import { Page5Module } from './page5/page5.module';
import { Page6Module } from './page6/page6.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page1Module,
    Page2Module,
    Page3Module,
    Page4Module,
    Page5Module,
    Page6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
