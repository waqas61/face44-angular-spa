import { Component, OnInit,Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormBase }      from   './../../form/form-base';
import { FormInterface } from   './../../form/form-interface';
import { FormFactory }  from './../../form/form-factory';
import { FormControlService } from './../../form/form-control.service';
import { UserFormService } from './../user-form.service';
import { ApiService } from '../../service/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, FormInterface {
	
	form_data: any;
	form_fields: FormBase<any>[];
	user_form: FormFactory;
	form : FormGroup;

	constructor( private fcs: FormControlService, private service: UserFormService , private api: ApiService,private router: Router) {}

	ngOnInit() {
		this.form_fields = this.service.getUserForm();
		this.user_form   = this.service.getUserFormModel();
		this.form = this.fcs.toFormGroup(this.form_fields);
	}
	get isValid() { return true;}

	onSubmit() {
		this.api.addUser(this.form.value).subscribe(res => {
			this.router.navigate(['user-list']);
			console.log(res);
		}, err => {
			console.log(err);
		});
		console.log(JSON.stringify(this.form.value));
	}

	//@Input() form_data: any;
	//@Input() form_fields: any;
	//@Input() user_form: any;
	//form: FormGroup; 
	//constructor( private fcs: FormControlService ) {}
	//ngOnInit() {this.form = this.fcs.toFormGroup(this.form_fields);}
	//get isValid() { return true;}
	//onSubmit() {console.log(JSON.stringify(this.form.value));}
}



