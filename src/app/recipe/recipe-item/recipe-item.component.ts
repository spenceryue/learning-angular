import { Component, Input } from '@angular/core';

export interface IRecipeItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: [ './recipe-item.component.css' ],
})
export class RecipeItemComponent implements IRecipeItem {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  constructor() {}
}
