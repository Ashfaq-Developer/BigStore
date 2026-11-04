import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children:[
      {
        path: 'new-arrivals',
        component: NewArrivalsComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
