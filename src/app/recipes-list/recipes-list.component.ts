import {Component, OnInit} from '@angular/core';
import {Recipe} from "../core/model/recipe.model";
import {RecipesService} from "../core/services/recipes.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{
  recipes!:Observable<Recipe[]>;


  constructor(private service:RecipesService ) { }

  ngOnInit(): void {
    this.recipes=this.service.recipes$

  }



}
