import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { JoinUsComponent } from './join-us/join-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // from FormsModule import
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
