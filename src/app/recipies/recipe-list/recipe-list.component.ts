import { Component, OnInit } from '@angular/core';
import { Recipies } from '../recipies.model';
import { RecepieService } from '../recipies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipies : Recipies[];

  constructor(private recipieService:RecepieService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.recipies =  this.recipieService.getRecipe()
  }
  onNewRecipe()
  {
    this.router.navigate(['new'] ,{relativeTo:this.route});
  }
}
