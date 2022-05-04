import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {DataViewModule} from "primeng/dataview";
import {PaginatorModule} from "primeng/paginator";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipesListComponent,
    RecipesFilterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DataViewModule,
        HttpClientModule,
        PaginatorModule,
        RatingModule,
        ButtonModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
