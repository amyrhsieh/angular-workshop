import { Component }      from '@angular/core';

import { PokemonService } from './pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: [
    '../styles/buttons.scss',
    './pokemon.component.scss'
  ]
})
export class PokemonComponent {
  pokemon: any;
  searchTerm: string;
  searching: boolean = false;
  notFound: string;

  constructor(private pokemonService: PokemonService) {}

  search() {
    this.searching = true;
    this.pokemon = null;
    this.pokemonService.getPokemon(this.searchTerm)
      .subscribe(
        pokemon => {
          this.searching = false;
          this.pokemon = pokemon;
        },
        error => {
          this.searching = false;
          this.notFound = this.searchTerm;
        }
      )
  }

  clearErrors(event: any): void {
    if(event.key != "Enter") {
      this.notFound = null;
    }
  }
}
