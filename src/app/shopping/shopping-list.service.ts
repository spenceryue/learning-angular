import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  items = [
    {
      name: 'Tomatoes',
      amount: 10,
    },
    { name: 'Apples', amount: 5 },
  ] as Ingredient[];
  selectedIdx: number;

  add(item: Ingredient) {
    this.items.push(item);
    this.selectedIdx = this.items.length - 1;
  }
  remove() {
    if (this.selectedIdx < 0) {
      return;
    }
    this.items.splice(this.selectedIdx, 1);
    this.selectedIdx--;
  }
  clear() {
    this.items.length = 0;
    this.selectedIdx = -1;
  }
}
