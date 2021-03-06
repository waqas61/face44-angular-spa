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
import { RouterModule, Routes } from '@angular/router';
import { DialogConfirmComponent } from './../dialog-confirm/dialog-confirm.component';
import { 
          MatInputModule,MatPaginatorModule,MatProgressSpinnerModule,MatSortModule, MatTableModule,
          MatIconModule,MatButtonModule,MatCardModule,MatFormFieldModule ,MatDialogModule
       }  from "@angular/material";
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserListComponent, UserAddComponent,UserFormComponent,DialogConfirmComponent, UserEditComponent],
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
    MatDialogModule,
    FormModule,
    RouterModule
  ],
  providers: [
    UserFormService
  ],
  exports:[

  ],
  entryComponents: [ UserFormComponent,DialogConfirmComponent ],
})
export class UserModule {
  constructor() {
  }
 }
