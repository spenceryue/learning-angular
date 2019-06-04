import { Ingredient } from 'src/app/shared/ingredient.model';
export interface Recipe {
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
}
