import { EventEmitter, Injectable } from "@angular/core";

import { Recipies } from "./recipies.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecepieService
{
    RecipeSelected = new EventEmitter<Recipies>();
   private recipies : Recipies[] = [
        new Recipies('A Sweet Pizza','A Sweet And Tasty pizza ! ^-^','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9EsXc4G0v00iJNd_PuM3dRhZBSZ3nI6C3E1ZGxqIDeF_xI63',[
            new Ingredient('Frenchfries',12),
            new Ingredient('Coke',2)
        ]),
       new Recipies('An Egg Circled Dish','A beautiful egg circle Made up with egg only','https://cb-web-assets.imgix.net/getmagicbullet/img/recipe-red-pepper-deviled-eggs.jpg',
         [new Ingredient('egg',1)]
       )
    ];
    constructor(private shoppingListService: ShoppingListService){}
 
      getRecipe()
      {
          return this.recipies.slice();
      }
      addRecipeToShoppingList(ingredients :Ingredient[])
      {
           this.shoppingListService.AddnewIngredients(ingredients);
      }
      getSingleRecipe(index :number)
      {
          return this.recipies[index];
      }
}