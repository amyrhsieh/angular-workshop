import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConceptsComponent }    from './concepts/concepts.component';
import { RobotsComponent }      from './robots/robots.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'concepts',  component: ConceptsComponent },
  { path: 'robots',    component: RobotsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
