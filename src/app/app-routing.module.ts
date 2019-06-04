import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Route targets
import { AppComponent } from './app/app.component';
import { AppComponent as Ex1Component } from '../ex1/app.component';
import { Ex2Component } from '../ex2/app.component';
import { Ex3Component } from '../ex3/app.component';
import { Ex4Component } from '../ex4/app.component';
import { Ex5Component } from '../ex5/app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeNewComponent } from './recipe/recipe-new/recipe-new.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'recipes' },
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component },
  { path: 'ex5', component: Ex5Component },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'shopping-list', component: ShoppingComponent },
      {
        path: 'recipes',
        component: RecipeComponent,
        children: [
          {
            path: '',
            component: RecipeDetailComponent,
          },
          {
            path: 'new',
            component: RecipeNewComponent,
          },
          {
            path: ':idx',
            component: RecipeDetailComponent,
          },
          {
            path: ':idx/edit',
            component: RecipeEditComponent,
          },
        ],
      },
    ],
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
