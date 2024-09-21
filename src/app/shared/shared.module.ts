import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormAuthentificationComponent } from './form-authentification/form-authentification.component';



@NgModule({
  declarations: [
    FormAuthentificationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports:[FormAuthentificationComponent],
  
})
export class SharedModule { }
