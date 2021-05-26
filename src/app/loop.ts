import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loop]'
})
export class Loop {

  @Input('loop')
  public loopNumber = 0;

  private template: TemplateRef<any>;
  private viewContainer: ViewContainerRef;

  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef){
    this.template = templateRef;
    this.viewContainer = viewContainerRef;
  }

  ngOnInit(){
    for (let i = 0; i < this.loopNumber; i++){
      this.viewContainer.createEmbeddedView(this.template, {
        number: i,
        name: "Younes"
      });
    }
  }
}
