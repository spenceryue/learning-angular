import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

// Exercises
import { Ex1Component } from '../ex1/app.component';
import { Ex2Component } from '../ex2/app.component';
import { Ex3Component } from '../ex3/app.component';
import { Ex4Component } from '../ex4/app.component';
import { Ex1Module } from '../ex1/app.module';
import { Ex2Module } from '../ex2/app.module';
import { Ex3Module } from '../ex3/app.module';
import { Ex4Module } from '../ex4/app.module';

// For ion-icons
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Routing
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const appRoutes: Routes = [
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component },
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    Ex1Module,
    Ex2Module,
    Ex3Module,
    Ex4Module,
  ],
  providers: [],
  bootstrap: [ IndexComponent ],
  // For ion-icons
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
