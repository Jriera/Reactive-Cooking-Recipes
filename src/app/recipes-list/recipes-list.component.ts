import { Component, OnInit } from '@angular/core';
import {Recipe} from "../core/model/recipe.model";
import {RecipesService} from "../core/services/recipes.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes!:Recipe[];
  constructor(private service:RecipesService ) { }

  ngOnInit(): void {
    this.service.getRecipes().subscribe(recipes =>{
      this.recipes=recipes;
    });
  }

}
