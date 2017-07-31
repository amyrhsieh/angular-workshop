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
    { name: 'Iron Man', ability: 'technological genius' },
    { name: 'Gamora', ability: 'being a human weapon' },
    { name: 'Wolverine', ability: 'indestructibility' },
    { name: 'Deadpool', ability: 'snark' },
    { name: 'The Hulk', ability: 'hulking out' }
  ];

  selectedPlayer: Player;

  gameOn: boolean = true;

  handlePlayerClick(player: Player): void {
    this.selectedPlayer = player;
  }

  handleToggleGameClick(): void {
    this.gameOn = !this.gameOn;
  }

  addPlayer(form: any): void {
    // console.dir(form.value);
    this.players.push(form.value);
    form.reset();
  }
}
