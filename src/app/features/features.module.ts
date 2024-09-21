import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './users/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { AdminHomeComponent } from './administrators/admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AdminHomeComponent
  ],

  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule
  ],
  
})
export class FeaturesModule { }
