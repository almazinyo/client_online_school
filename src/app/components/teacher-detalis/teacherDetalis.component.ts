import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TeacherDetalisService} from './teacher-detalis.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacherDetalis.component.html',
})
export class TeacherDetalisComponent {
  showCheckImg = false;
  teacherData: InterFaceTeacherDetalis[] = [];
  constructor(private teacherDetalisService: TeacherDetalisService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getTeacherDetal(params.id);
      }
    );
  }

  getTeacherDetal(slug) {
    this.teacherDetalisService.getTeacherDetalis(slug).then((data: InterFaceTeacherDetalis[]) => {
        this.teacherData = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по учитель: ', error);
      });
  }
}
