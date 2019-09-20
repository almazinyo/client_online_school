import {Component} from '@angular/core';
import {ProfilePointsService} from './profile_points.service';

@Component({
  selector: 'app-profile-points',
  templateUrl: './profile_points.component.html',
})
export class ProfilePointsComponent {
  pointsInfo: InterFaceProfilePoints = {
    points: null,
    level: null,
    nextLevel: ''
  };

  constructor(private profilePointsService: ProfilePointsService) {
    this.profilePointsService.getPoints().then((data: InterFaceProfilePoints) => {
        this.pointsInfo = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по баллам: ', error);
      });
  }
}
