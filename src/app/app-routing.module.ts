import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersBaseComponent } from './layouts/users/users-base/users-base.component';
import { AdminBaseComponent } from './layouts/administrators/admin-base/admin-base.component';

const routes: Routes = [ 

{
  path: 'users',
  component: UsersBaseComponent, // Affiche le layout utilisateur
  loadChildren: () => import('./features/users/users-routing.module').then(m => m.UsersRoutingModule)
},

{
  path: 'administrators',
  component: AdminBaseComponent, // Affiche le layout admin
  loadChildren: () => import('./features/administrators/administrators-routing.module').then(m => m.AdministratorsRoutingModule)
},

{ path: '', redirectTo: 'users',pathMatch:'full' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
