import { Component, OnInit } from '@angular/core';
import { Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';


import { FormBase }  from './../form-base';
import { FormControlService }    from '../form-control.service';
import { FormGroup }                 from '@angular/forms';
import { HostFormDirective } from './host-form.directive';
import { BaseInterfaceComponent } from './base-interface-component';
import { FormFactory }  from './../form-factory';
import { FormInterface } from './../form-interface';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css'],
  providers: [ FormControlService ]
})

export class AppFormComponent implements OnInit {


  @Input() form_fields: FormBase<any>[];
  @Input() user_form: FormFactory; 
  @Input() form : FormGroup;

  @ViewChild(HostFormDirective, {static: true}) appHostForm: HostFormDirective;
  

  constructor(private componentFactoryResolver: ComponentFactoryResolver , private fcs: FormControlService) {}	

  ngOnInit() {

  	const user_form = this.user_form;

  	this.form = this.fcs.toFormGroup(this.form_fields);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.user_form.component);
    const viewContainerRef = this.appHostForm.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    

    (<FormInterface>componentRef.instance).form_data = user_form.form_meta_data;
    (<FormInterface>componentRef.instance).form_fields = this.form_fields;
    (<FormInterface>componentRef.instance).form = this.form;

    console.log("(<FormInterface>componentRef.instance)==========>>  "  ,(<FormInterface>componentRef.instance) );


  
  }

}
