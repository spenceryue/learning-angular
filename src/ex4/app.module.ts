import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Ex4Component } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ Ex4Component, GameControlComponent, ItemComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ Ex4Component ],
})
export class Ex4Module {}
