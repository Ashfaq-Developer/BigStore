import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
// import { group } from '@angular/animations';
import { GroupComponent } from './group/group.component';
import { ParentComponent } from './parent/parent.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id/view',
    component: ProductComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'categories/list',
    component: GroupComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'contact',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
