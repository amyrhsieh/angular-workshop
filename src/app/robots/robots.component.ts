import { Component, OnInit }  from '@angular/core';
import { RobotService }       from './robot.service';

@Component({
  selector: 'robots',
  templateUrl: './robots.component.html',
  styleUrls: [
    './robots.component.scss'
  ]
})
export class RobotsComponent implements OnInit {
  constructor(private robotService: RobotService) {

  }

  ngOnInit() {
    this.robotService.getRobot('fruitcake')
      .subscribe(
        robot => {},
        error => {}
      )
  }
}
