import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes = [
    {
      title: `Pediatricians warn against chemical additives`,
      // tslint:disable-next-line: max-line-length
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image:
        'https://www.sciencenews.org/sites/default/files/2018/07/main/articles/072318_LR_pediatric-chemicals_feat.jpg',
      ingredients: [ { name: 'Buns 🍞', amount: 1 }, { name: 'Meat 🍖', amount: 2 } ],
    },
    {
      title: `Fast Food Restaurants That Straight Up Cheat Customers`,
      // tslint:disable-next-line: max-line-length
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image: 'https://i.ytimg.com/vi/P2DFREWkmiQ/maxresdefault.jpg',
      ingredients: [ { name: 'Potatoes 🥔', amount: 1000 }, { name: 'Tomatoes 🍅', amount: 2 } ],
    },
    {
      title: `The Takeout's guide to eating Korean food like a Korean`,
      // tslint:disable-next-line: max-line-length
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image:
        'https://i.kinja-img.com/gawker-media/image/upload/s--djYdkXK4--/c_scale,f_auto,fl_progressive,q_80,w_1600/be9vyovcn2gqwod7kd16.jpg',
      ingredients: [ { name: 'Mangos 🥭', amount: 1 }, { name: 'Strawberries 🍓', amount: 3 } ],
    },
    {
      title: `💩`,
      // tslint:disable-next-line: max-line-length
      description: `pile of poo`,
      image: 'https://www.pinmart.com/assets/1/6/DimLarge/1796_1k.jpg?13899',
      ingredients: [ { name: 'Toilet Paper 🧻', amount: 10 }, { name: '🚽', amount: 1 } ],
    },
  ] as Recipe[];
  selectByIdx(idx: number) {
    this.recipeSelected.emit(this.recipes[idx]);
  }
}
