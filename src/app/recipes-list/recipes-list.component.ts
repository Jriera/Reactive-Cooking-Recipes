import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../core/model/recipe.model";
import {RecipesService} from "../core/services/recipes.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit,OnDestroy {
  recipes!:Recipe[];
  destroy$:Subject<void> = new Subject<void>();
  /* REQUIRES UNSUBSCRIBE subscription: Subscription | undefined;*/
  constructor(private service:RecipesService ) { }

  ngOnInit(): void {
    /*IT WORKS BUT DEMANDS AN UNSUBSCRIBING DECLARATIVE METHOD
    this.subscription=this.service.getRecipes().subscribe(recipes =>{
      this.recipes=recipes;
    });*/

    this.service.getRecipes().pipe(
      takeUntil(this.destroy$)
    ).subscribe(recipes =>{
      this.recipes=recipes
    })
  }

  ngOnDestroy() {
    /* REQUIRES UNSUBSCRIBE this.subscription?.unsubscribe();*/
    this.destroy$.next();
    this.destroy$.complete()
  }

}
