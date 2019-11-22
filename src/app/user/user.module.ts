import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormModule } from './../form/form.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

import { UserFormComponent } from './user-form/user-form.component';
import { UserFormService } from './user-form.service';


import { 
          MatInputModule,MatPaginatorModule,MatProgressSpinnerModule,MatSortModule, MatTableModule,
          MatIconModule,MatButtonModule,MatCardModule,MatFormFieldModule 
       }  from "@angular/material";

@NgModule({
  declarations: [UserListComponent, UserAddComponent,UserFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormModule
  ],
  providers: [
    UserFormService
  ],
  exports:[

  ],
  entryComponents: [ UserFormComponent ],
})
export class UserModule {
  constructor() {
  }
 }
