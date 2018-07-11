import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { Recipies } from '../recipies.model';
import { RecepieService } from '../recipies.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 recipe: Recipies;
 id: number;
  constructor(private recipeService: RecepieService,private route:ActivatedRoute,
  private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) =>
      {
     this.id = +params['id'];
    this.recipe =  this.recipeService.getSingleRecipe(this.id);
      });
      
  }
  onAddShoppingList()
  {
    this.recipeService.addRecipeToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
