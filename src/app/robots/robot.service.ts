import { Injectable, Inject }     from '@angular/core';
import { Headers, Http }          from '@angular/http';
import { Observable }             from 'rxjs/Rx';

@Injectable()
export class RobotService {
  //RoboHash API
  apiEndpoint: string = 'http://robohash.org/';

  constructor(private http: Http) {}

  getRobot(name: string): Observable<any> {
    return this.http.get(this.apiEndpoint + name)
       .map(response => response.json());
  }
}
