import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlehComponent } from './bleh/bleh.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';

@NgModule({
  declarations: [ AppComponent, BlehComponent, SuperDuperComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
