import { Component } from '@angular/core';

@Component({
  selector: 'concepts',
  templateUrl: './concepts.component.html',
  styleUrls: [
    '../styles/buttons.scss',
    './concepts.component.scss'
  ]
})
export class ConceptsComponent {
  //Data binding
  simpleName: string = 'Amy';

  //Two-way input binding
  inputName: string = 'Your name here';

  //ngIf
  showConditional: boolean = true;

  //ngFor
  veggies = [
    'carrot',
    'broccoli',
    'cabbage'
  ]

  //Event binding
  handleClick(): void {
    this.showConditional = !this.showConditional;
  }
}
