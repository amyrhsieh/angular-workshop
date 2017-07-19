import { Component, OnInit }      from '@angular/core';

import { PokemonService } from './pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: [
    '../styles/buttons.scss',
    './pokemon.component.scss'
  ]
})
export class PokemonComponent implements OnInit {
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon('bulbasaur')
      .subscribe(
        pokemon => this.pokemon = pokemon,
        error => {}
      )
  }
}
