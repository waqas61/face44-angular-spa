import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from './../user';



@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	displayedColumns: string[] = ['first_name', 'last_name','email', 'phone'];
	data: User[] = [];
	isLoadingResults = true;

	constructor(private api: ApiService) { }

	ngOnInit() {
		this.api.getUsers().subscribe(res => {
			this.data = res.data;
			console.log(this.data);
			this.isLoadingResults = false;
		}, err => {
			console.log(err);
			this.isLoadingResults = false;
		});
	}
}
