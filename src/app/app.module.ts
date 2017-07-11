import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';
import { ConceptsComponent }  from './concepts/concepts.component';
import { RobotsComponent }    from './robots/robots.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ConceptsComponent,
    RobotsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
