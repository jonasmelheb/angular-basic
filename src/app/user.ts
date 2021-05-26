import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'user',
  template: `
		<h2> {{ firstname }} {{ lastname }} </h2>
		<small>Il a {{ age }} ans</small>
		<button (click)="onClickDelete()">Supprimer</button>
		<input #newName type="text">
		<button (click)="onClickUpdate(newName.value)">Modifier le nom</button>
		`,
  styles: [
    `
			small {
				fontStyle: italic;
			}
		`
  ]

})

export class User {
  @Input("first-name")
  firstname: string | undefined;

  @Input("last-name")
  lastname: string | undefined;

  @Input("age")
  age: number | undefined;

  constructor(private element: ElementRef<HTMLDivElement>){}

  ngOnInit() {}

  onClickDelete() {
    this.element.nativeElement.remove();
  }

  onClickUpdate(newName: string) {
    this.lastname = newName;
  }

}
