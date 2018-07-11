import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipies/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipies/recipe-edit/recipe-edit.component";


const appRoute :Routes = [
          {path:'',
          redirectTo:'/recipies',
          pathMatch:'full'
          },
         {path:'recipies' , component:RecipiesComponent, children:[
             {path:'' ,component: RecipeStartComponent},
             {path: 'new',component:RecipeEditComponent},
             {path:':id' ,component: RecipeDetailComponent},
             {path: ':id/edit',component:RecipeEditComponent}

         ]},
         {path:'shopping-list' , component:ShoppingListComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoute)],
  exports:[RouterModule]
}) 

export class AppRoutingMoudle
{

}