import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
