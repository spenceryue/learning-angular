import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ],
})
export class ShoppingListComponent {
  items: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.items = this.shoppingListService.items;
  }
  toggleSelect(idx: number) {
    this.shoppingListService.selectedIdx = this.isCurrentlySelected(idx) ? -1 : idx;
  }
  isCurrentlySelected(i: number) {
    return i === this.shoppingListService.selectedIdx;
  }
}
