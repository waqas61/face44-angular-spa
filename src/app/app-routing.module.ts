import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
const routes: Routes = [
			{ path: '', component: DashboardComponent },
			{ path: 'user-list', component: UserListComponent },
			{ path: 'user-add',  component: UserAddComponent },
			{ path: 'user-edit/:id',  component: UserEditComponent },
		];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
