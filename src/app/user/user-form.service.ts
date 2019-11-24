import { Injectable } from '@angular/core';


import { FormBase }     from './../form/form-base';
import { TextboxControl }  from './../form/control/textbox-control';


@Injectable()
export class UserFormService {

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
        required: true,
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