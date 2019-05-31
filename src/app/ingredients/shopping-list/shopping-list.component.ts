import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ],
})
export class ShoppingListComponent {
  items = [
    {
      name: 'Tomatoes',
      amount: 10,
    },
    { name: 'Apples', amount: 5 },
  ] as Ingredient[];

  constructor() {}
}
