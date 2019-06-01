import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Ex2Component } from './app.component';

@NgModule({
  declarations: [ Ex2Component ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ Ex2Component ],
})
export class Ex2Module {}
