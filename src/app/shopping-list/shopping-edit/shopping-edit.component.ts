import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('nameInput') nameInputref: ElementRef;
   @ViewChild('amountInput') nameAmountref: ElementRef;
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.nameAmountref.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
     this.shoppingListService.AddnewIngredient(newIngredient);
  }
}
