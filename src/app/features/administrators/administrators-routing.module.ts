import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: 'home', component:AdminHomeComponent},
  { path: '', redirectTo: 'home',pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  
  exports: [RouterModule]
})
export class AdministratorsRoutingModule { }
