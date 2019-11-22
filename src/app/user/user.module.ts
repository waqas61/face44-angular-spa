import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormService } from './user-form.service';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    UserFormService
  ],  
})
export class UserModule { }
