import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Ex3Component } from './app.component';

@NgModule({
  declarations: [ Ex3Component ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ Ex3Component ],
})
export class Ex3Module {}
