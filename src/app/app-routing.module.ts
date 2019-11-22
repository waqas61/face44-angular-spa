import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
			{ path: '', component: DashboardComponent },
			{ path: 'user-list', component: UserListComponent }
		];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
