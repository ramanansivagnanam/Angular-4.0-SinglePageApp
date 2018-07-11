import { Component, OnInit, Input} from '@angular/core';
import { Recipies } from '../../recipies.model';
import { RecepieService } from '../../recipies.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipies;
   @Input() index: number;
  ngOnInit() {
  }
 
}
