import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	
	form_fields: FormBase<any>[];
	form : FormGroup;
	isLoadingResults : boolean =  false;
	submitted = false;
	constructor(private fcs: FormControlService, private service: UserFormService , private api: ApiService,private router: Router) {}

	ngOnInit() {
		this.form_fields = this.service.getUserForm();
		this.form = this.fcs.toFormGroup(this.form_fields);
	}

	onSubmit() {
		this.submitted = true;
        if (this.form.invalid) {
            return;
        }
		this.api.addUser(this.form.value).subscribe(res => {
			this.isLoadingResults = true;
			this.router.navigate(['user-list']);
			console.log(res);
		}, err => {
			this.isLoadingResults = false;
			console.log(err);
		});
	}
}



