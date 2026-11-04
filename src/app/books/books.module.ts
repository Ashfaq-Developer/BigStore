import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    NewArrivalsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
