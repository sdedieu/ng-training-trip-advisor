import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantReviewingComponent } from './restaurant-reviewing.component';

const routes: Routes = [
  { 
    path: '',
    component: RestaurantReviewingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantReviewingRoutingModule { }
