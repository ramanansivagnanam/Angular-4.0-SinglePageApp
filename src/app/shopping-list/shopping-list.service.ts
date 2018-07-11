import { EventEmitter } from "@angular/core";


import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] =[
        new Ingredient('Tomatos',3),
        new Ingredient('potato',2),
        new Ingredient('Apple',4),
      ];
   getIngredient()
   {
       return this.ingredients.slice();
   }
   AddnewIngredient(ingredient: Ingredient)
   {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
   }
   AddnewIngredients(ingredients :Ingredient[])
   {
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.emit(this.ingredients.slice());
   }
}