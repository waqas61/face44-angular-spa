import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from './../user';
import {Router} from "@angular/router";


@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	displayedColumns: string[] = ['first_name', 'last_name','email', 'phone' ,'action'];
	//data: User[] = [];
	data: Array<User> = [];
	isLoadingResults = true;

	constructor(private api: ApiService,private router: Router) { }

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

	deleteUser(id) {
	  this.isLoadingResults = true;
	  this.api.deleteUser(id)
	    .subscribe(res => {
	        this.isLoadingResults = false;
	        this.router.navigate(['user-list']);
	      }, (err) => {
	        console.log(err);
	        this.isLoadingResults = false;
	      }
	    );
	}



}
