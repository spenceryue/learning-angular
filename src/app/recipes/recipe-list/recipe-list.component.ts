import { Component } from '@angular/core';
import { IRecipeItem } from '../recipe-item/recipe-item.component';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.css' ],
})
export class RecipeListComponent {
  items = [
    {
      title: `Pediatricians warn against chemical additives`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image:
        'https://www.sciencenews.org/sites/default/files/2018/07/main/articles/072318_LR_pediatric-chemicals_feat.jpg',
    },
    {
      title: `Fast Food Restaurants That Straight Up Cheat Customers`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image: 'https://i.ytimg.com/vi/P2DFREWkmiQ/maxresdefault.jpg',
    },
    {
      title: `The Takeout's guide to eating Korean food like a Korean`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi consequatur praesentium incidunt exercitationem. Facilis odio quae, a nulla inventore, similique velit eveniet id possimus voluptatem architecto totam debitis ipsa.`,
      image:
        'https://i.kinja-img.com/gawker-media/image/upload/s--djYdkXK4--/c_scale,f_auto,fl_progressive,q_80,w_1600/be9vyovcn2gqwod7kd16.jpg',
    },
  ] as IRecipeItem[];
  constructor() {}
}
