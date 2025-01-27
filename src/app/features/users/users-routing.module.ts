import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo: 'home',pathMatch:'full' }
];


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],

  exports:[
    RouterModule,
    
  ]
  
})
export class UsersRoutingModule { }
