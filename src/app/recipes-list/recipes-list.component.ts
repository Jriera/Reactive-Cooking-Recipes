import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../core/model/recipe.model";
import {RecipesService} from "../core/services/recipes.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],

})
export class RecipesListComponent implements OnInit, OnDestroy {
  @Input() titleFilter!: string;
  filteredRecipes: Recipe[] = [];
  recipes: Recipe[] = [];
  private destroy$: Subject<boolean> = new
  Subject<boolean>();

  constructor(private service: RecipesService, private fb:
    FormBuilder) {
  }

  ngOnInit(): void {
    this.service.recipes$.pipe(takeUntil(this.destroy$))
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.filteredRecipes = recipes;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  filterResults() {
    if (this.titleFilter) {
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.title?.indexOf(this.titleFilter) !=
        -1)
    }
  }
}
