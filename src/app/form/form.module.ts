import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [ FormFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormFieldComponent],
  
})
export class FormModule { }
