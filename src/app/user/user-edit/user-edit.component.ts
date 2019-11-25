import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit ,AfterViewInit,ngOnChanges {
	
  user_edit: string;
  constructor(private api: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
  		const id: string = this.route.snapshot.params['id'];
  		this.user_edit = id;
		//this.api.editUser(id).subscribe(res => {
		//	this.user = res.data;
		//	console.log('edit ==>',this.user);
		//}, err => {
		//	console.log(err);
		//});
  }
    ngOnChanges() {

  }
    ngAfterViewInit(): void {

    }
}
