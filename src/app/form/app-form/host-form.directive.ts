import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHostForm]'
})
export class HostFormDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
