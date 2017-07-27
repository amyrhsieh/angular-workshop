import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { ConceptsComponent }  from './concepts/concepts.component';
import { PokemonComponent }   from './pokemon/pokemon.component';
import { PokemonService }     from './pokemon/pokemon.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ConceptsComponent,
    PokemonComponent
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
