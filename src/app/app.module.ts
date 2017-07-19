import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule }       from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { ConceptsComponent }  from './concepts/concepts.component';
import { RobotsComponent }    from './robots/robots.component';
import { RobotService }       from './robots/robot.service';
import { PokemonComponent }   from './pokemon/pokemon.component';

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
    RobotsComponent,
    PokemonComponent
  ],
  providers: [
    RobotService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
