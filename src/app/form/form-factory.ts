import { Type } from '@angular/core';
import { FormBase }     from './form-base';

export class FormFactory {
  constructor(public component: Type<any>, public form_meta_data: any) {}
}
