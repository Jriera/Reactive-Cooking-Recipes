import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Recipe} from "../core/model/recipe.model";
import {RecipesService} from "../core/services/recipes.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
/*Since we are using async pipe with observable we can leverage the advantages of the OnPush change detection
* saving unnecessary change detection iterations unless the observable stream changes*/

export class RecipesListComponent implements OnInit{
  recipes!:Observable<Recipe[]>;


  constructor(private service:RecipesService ) { }

  ngOnInit(): void {
    this.recipes=this.service.recipes$

  }



}
