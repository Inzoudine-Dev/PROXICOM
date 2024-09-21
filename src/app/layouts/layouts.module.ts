import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHeaderComponent } from './users/users-header/users-header.component';
import { UsersBaseComponent } from './users/users-base/users-base.component';
import { UsersFooterComponent } from './users/users-footer/users-footer.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './administrators/admin-header/admin-header.component';
import { AdminFooterComponent } from './administrators/admin-footer/admin-footer.component';
import { AdminBaseComponent } from './administrators/admin-base/admin-base.component';




@NgModule({
  declarations: [
    UsersBaseComponent,
    UsersHeaderComponent,
    UsersFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBaseComponent,
  ],
  
  imports: [
    CommonModule,
    RouterModule,

  ],

})
export class LayoutsModule { }
