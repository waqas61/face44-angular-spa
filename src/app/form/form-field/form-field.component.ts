import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
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
  @Input() submitted;
  
  constructor() {
  }
  ngOnInit() {

  }

  log(val) { console.log('Template === >>  ',val); }
}
