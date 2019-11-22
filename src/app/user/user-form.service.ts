import { Injectable } from '@angular/core';

import { FormFactory }  from './../form/form-factory';
import { FormBase }     from './../form/form-base';
import { TextboxControl }  from './../form/control/textbox-control';

import { UserFormComponent } from './user-form/user-form.component';

@Injectable()
export class UserFormService {

  getUserFormModel(){
      return new FormFactory(UserFormComponent, {name: 'Bombasto', bio: 'Brave as they come'})
  }

  getUserForm() {

    let form_fields: FormBase<any>[] = [

      new TextboxControl({
        key: 'first_name',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxControl({
        key: 'last_name',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxControl({
        key: 'email',
        label: 'Email',
        type: 'email',
        order: 3
      }),

      new TextboxControl({
        key: 'phone',
        label: 'phone',
        value: '',
        required: true,
        order: 4
      }),
    ];

    return form_fields.sort((a, b) => a.order - b.order);
  }

}