import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MessageComponent } from './message/message.component';
import { GetTimeComponent } from './get-time/get-time.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MessageComponent, GetTimeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
