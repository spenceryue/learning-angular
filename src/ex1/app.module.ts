import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Ex1Component } from './app.component';
import { BlehComponent } from './bleh/bleh.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

@NgModule({
  declarations: [ Ex1Component, BlehComponent, SuperDuperComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ Ex1Component ],
})
export class Ex1Module {}
