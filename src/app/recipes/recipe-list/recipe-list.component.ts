import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = 
  [
    new Recipe('TestRecipe','Test Description','https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg'), 
    new Recipe('TestRecipe','Test Description','https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg') 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
