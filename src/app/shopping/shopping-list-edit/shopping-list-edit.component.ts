import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: [ './shopping-list-edit.component.css' ],
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  add(name: string, amount: number) {
    if (!name || !isFinite(amount)) {
      return;
    }
    this.shoppingListService.add({ name, amount });
  }
  remove() {
    this.shoppingListService.remove();
  }
  clear() {
    this.shoppingListService.clear();
  }
}
