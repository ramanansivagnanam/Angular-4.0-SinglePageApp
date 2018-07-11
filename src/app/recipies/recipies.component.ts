import { Component, OnInit } from '@angular/core';
import { Recipies } from './recipies.model';
import { RecepieService } from './recipies.service';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecepieService]
  
})
export class RecipiesComponent implements OnInit {
  
  selectedRecipe :  Recipies;
   
  constructor(private recipeService: RecepieService) { }

  ngOnInit() {
    this.recipeService.RecipeSelected
    .subscribe(
      (recipies: Recipies) => {
     this.selectedRecipe = recipies;
      }
    );
  }
  
}
