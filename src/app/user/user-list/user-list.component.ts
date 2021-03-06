import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from './../user';
import {Router} from "@angular/router";
import { VERSION, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { DialogConfirmComponent } from './../../dialog-confirm/dialog-confirm.component';
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

	constructor(private api: ApiService,private router: Router,public dialog: MatDialog) { }

	ngOnInit() {
		this.api.getUsers().subscribe((res: any) => {
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

	openDialog(id) {
		const dialogRef = this.dialog.open(DialogConfirmComponent);
		dialogRef.afterClosed().subscribe(result => {
			if(result == true){
			    this.data = this.data.filter((value,key)=>{
			      return value.id != id;
			    });
				this.deleteUser(id);
			}
		});
	}

}


