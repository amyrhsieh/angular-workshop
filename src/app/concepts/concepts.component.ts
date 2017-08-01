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
  //Template interpolation
  simpleName: string = 'Amy';

  //Two-way input binding
  inputName: string = 'Your name here';

  //Conditionals
  showConditional: boolean = true;

  //Iteration
  veggies = [
    'carrot',
    'broccoli',
    'cabbage'
  ];

  //Event binding
  handleClick(): void {
    this.showConditional = !this.showConditional;
  }

  //Conditional class
  fruits = [
    'orange',
    'kiwi',
    'pear'
  ];
  selectedFruit: number;

  selectFruit(i: number): void {
    this.selectedFruit = i;
  }

}
