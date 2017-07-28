import { Component } from '@angular/core';

interface Player {
  name: string,
  ability: string
};

@Component({
  selector: 'roster',
  templateUrl: './roster.component.html',
  styleUrls: [
    '../styles/buttons.scss',
    './roster.component.scss'
  ]
})
export class RosterComponent {
  coachName: string = 'Amy';

  players: Player[] = [
    { name: 'Iron Man', ability: 'technology' },
    { name: 'Gamora', ability: 'human weapon' },
    { name: 'Wolverine', ability: 'indestructible' },
    { name: 'Deadpool', ability: 'snark' },
    { name: 'The Hulk', ability: 'hulking out, blends in with trees' }
  ];

  gameOn: boolean = true;

  handleClick(): void {
    this.gameOn = !this.gameOn;
  }

}
