import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FormBase }  from './../form-base';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})

export class FormFieldComponent implements OnInit {
  @Input() form_fields: FormBase<any>;
  @Input() form: FormGroup;
  constructor() {

  }
  ngOnInit() {

  }
  get isValid() {
   return this.form.controls[this.form_fields.key].valid; 
  }
}
