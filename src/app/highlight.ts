import {Directive, HostBinding, Input, HostListener} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class Highlight {

  @HostBinding("style.background") //Lié la propriété color à style.background
  @Input("bg-color") // lié ce qui est dans l’html avec la propriété color
  color = "yellow";


  @HostListener("click") // lié une méthod avec EventListener (Click)
  changeColor(){
    this.color = "blue"
  }

}
