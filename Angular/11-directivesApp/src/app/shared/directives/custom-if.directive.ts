import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(cond:boolean)
  { 
    if(cond)
    {
      this.viewContainer.createEmbeddedView(this.tempref)
    }
    else
    {
      this.viewContainer.clear();
    }
  }

  constructor( private tempref: TemplateRef<HTMLElement>, private viewContainer:ViewContainerRef) { 

  }

}
