import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: MainPageComponent },
  { path: 'BudgetCalculator', component: MainPageComponent },
  { path: 'users', component: MainPageComponent },
  { path: 'login', component: MainPageComponent },
  { path: 'investment', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
