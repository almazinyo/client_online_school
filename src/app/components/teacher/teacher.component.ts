import {Component} from '@angular/core';
import {TeacherService} from './teacher.service';
import {Router} from '@angular/router';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  // styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  // this.socialLinks = [
  //   {
  //     name: "Facebook",
  //     images: "assets/imgs/icons/social/facebook.svg",
  //     link: "https://www.facebook.com/",
  //     subscribe: "12К подписчиков",
  //   },
  //   {
  //     name: "Telegram",
  //     images: "assets/imgs/icons/social/telegram.svg",
  //     link: "https://web.telegram.org/#/login",
  //     subscribe: "12К подписчиков",
  //   },
  //   {
  //     name: "Вконтакте",
  //     images: "assets/imgs/icons/social/vk.svg",
  //     link: "https://vk.com/",
  //     subscribe: "12К подписчиков",
  //   },
  //   {
  //     name: "Instagram",
  //     images: "assets/imgs/icons/social/instagram.svg",
  //     link: "https://www.instagram.com/",
  //     subscribe: "12К подписчиков",
  //   },
  //   {
  //     name: "Youtube",
  //     images: "assets/imgs/icons/social/youtube.svg",
  //     link: "https://www.youtube.com/",
  //     subscribe: "12К подписчиков",
  //   },
  // ]





  teachers: InterFaceSubTeacher[] = [];

  constructor(private teacherService: TeacherService,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = 'Teacher';

    this.teacherService.getTeachers().then((data: InterFaceSubTeacher[]) => {
        this.teachers = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по Teacher: ', error);
      });
  }

  getTeacher(slug) {
    this.router.navigate(['teacher/' + slug]);
  }

}
