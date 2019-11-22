import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppFormComponent } from './app-form/app-form.component';
import { HostFormDirective } from './app-form/host-form.directive';
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [AppFormComponent, HostFormDirective, FormFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AppFormComponent, FormFieldComponent],
  
})
export class FormModule { }
