import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { IndexComponent } from './index.component';
import { DropdownDirective } from './shared/dropdown.directive';

// Imports
import { AppModule as Ex1Module } from '../ex1/app.module';
import { Ex2Module } from '../ex2/app.module';
import { Ex3Module } from '../ex3/app.module';
import { Ex4Module } from '../ex4/app.module';
import { Ex5Module } from '../ex5/app.module';
import { AppRoutingModule } from './app-routing.module';

// For ion-icons
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

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
    ShoppingComponent,
    DropdownDirective,
    RecipeComponent,
    RecipeNewComponent,
    RecipeEditComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    Ex1Module,
    Ex2Module,
    Ex3Module,
    Ex4Module,
    Ex5Module,
  ],
  bootstrap: [ IndexComponent ],
  // For ion-icons
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}
