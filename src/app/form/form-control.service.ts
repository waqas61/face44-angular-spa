import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBase }  from './form-base';
@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(fields: FormBase<any>[] ) {
    let group: any = {};
    fields.forEach(field => {
      if(field.key == 'email'){
       group[field.key] = field.required ? new FormControl(field.value || '', [Validators.required, Validators.email])
                                              : new FormControl(field.value || '');   
      }else{
        group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
                                              : new FormControl(field.value || '');
      }
    });
    return new FormGroup(group);
  }
}
