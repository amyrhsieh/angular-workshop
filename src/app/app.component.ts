import { Component } from '@angular/core';

require('./styles/sitewide.global.scss');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './styles/buttons.scss'
  ]
})
export class AppComponent { }
