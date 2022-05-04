import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-recipoes-filter',
  templateUrl: './recipoes-filter.component.html',
  styleUrls: ['./recipoes-filter.component.scss']
})
export class RecipoesFilterComponent implements OnInit {



  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  recipeForm=this.fb.group({
    title:[''],
    category:[''],
    ingredient:[''],
    tags:[''],
    prepTime:[],
    cookingTime:[]

  })

  clearFilter(){}
  filterResults(){}

}
