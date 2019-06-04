import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Ex5Component } from './app.component';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [ Ex5Component ],
  imports: [ BrowserModule, FormsModule ],
  providers: [ UserService, CounterService ],
  bootstrap: [ Ex5Component ],
})
export class Ex5Module {}
