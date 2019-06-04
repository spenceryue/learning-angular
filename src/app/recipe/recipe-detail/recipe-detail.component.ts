import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: [ './recipe-detail.component.css' ],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => (this.recipe = recipe));
    this.route.params.subscribe((params: Params) => {
      this.recipeService.selectByIdx(params.idx);
    });
  }
  addToShoppingList() {
    this.recipe.ingredients.forEach(ingredient => this.shoppingListService.add(ingredient));
  }
}
