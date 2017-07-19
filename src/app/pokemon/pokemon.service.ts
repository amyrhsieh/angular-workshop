import { Injectable, Inject }     from '@angular/core';
import { Headers, Http }          from '@angular/http';
import { Observable }             from 'rxjs/Rx';

@Injectable()
export class PokemonService {
  //Pokemon API
  apiEndpoint: string = 'http://pokeapi.co/api/v2/';

  constructor(private http: Http) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiEndpoint}pokemon/${name}`)
       .map(response => response.json());
  }
}
