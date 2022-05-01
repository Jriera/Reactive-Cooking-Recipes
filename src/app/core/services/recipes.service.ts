import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../model/recipe.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  BASE_PATH=environment.basePath
  constructor(private http:HttpClient) { }

  getRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.BASE_PATH}/recipes`)
  }
}
