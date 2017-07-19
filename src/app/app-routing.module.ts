import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConceptsComponent }    from './concepts/concepts.component';
import { RobotsComponent }      from './robots/robots.component';
import { PokemonComponent }     from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: 'concepts', pathMatch: 'full' },
  { path: 'concepts',  component: ConceptsComponent },
  { path: 'robots',    component: RobotsComponent },
  { path: 'pokemon',   component: PokemonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
