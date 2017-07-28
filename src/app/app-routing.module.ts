import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConceptsComponent }    from './concepts/concepts.component';
import { RosterComponent }      from './roster/roster.component';
import { PokemonComponent }     from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'concepts', pathMatch: 'full' },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'roster',   component: RosterComponent },
  { path: 'pokemon',  component: PokemonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
