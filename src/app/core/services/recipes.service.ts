import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Recipe} from "../model/recipe.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  BASE_PATH=environment.basePath;
  recipes$:Observable<Recipe[]> = this.http.get<Recipe[]>(`${this.BASE_PATH}/recipes`).pipe(
    catchError(error=>of([]))
  )
  constructor(private http:HttpClient) { }


}
