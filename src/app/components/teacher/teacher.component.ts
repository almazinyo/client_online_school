import {Component} from '@angular/core';
import {teacherService} from './teacher.service';
import {Router} from '@angular/router';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  // styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  teachers: InterFaceSubTeacher[] = [];

  constructor(private teacherService: teacherService,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = 'Teacher';

    this.teacherService.getReviews().then((data: teacherService[]) => {
        this.teachers = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по Teacher: ', error);
      });
  }

  getTeacher(slug) {
    this.router.navigate(['teachers/' + slug]);
  }

}
