import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TeacherService} from '../teacher/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacherDetalis.component.html',
})
export class TeacherDetalisComponent {
  teacher: InterFaceTeacherDetails[] = [];

  // teacher: InterFaceTeacherDetails = {
  //   id: null,
  //   name: '',
  //   position: '',
  //   section_id: '',
  //   img_name: '',
  //   short_description: '',
  //   slug: '',
  //   description: '',
  //   created_at: '',
  //   updated_at: '',
  //   is_status: '',
  // };

  constructor(private teacherService: TeacherService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getTeacherDetails(params.id);
      }
    );
  }

  getTeacherDetails(slug) {
    this.teacherService.getTeacherDetails(slug).then((data: InterFaceTeacherDetails) => {
        this.teacher = data[0];
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по teacher: ', error);
      });
  }
}