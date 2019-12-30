import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../utils/http/http.service';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  subsection: InterFaceSubSection = {
    thing: '',
    section: '',
    name: '',
    img_path: '',
    short_description: '',
    description: '',
    subject: {title: ''},
    courses: [{
      background: '',
      name: '',
      slug: '',
      description: '',
      lessons: [{
        name: '',
        price: '',
      }]
    }]
  };

  constructor(private subsectionService: SubsectionService,
              private httpService: HttpService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getSubsection(params.id);
      }
    );
  }

  getSubsection(slug) {
    this.subsectionService.getSubSection(slug).then((data: InterFaceSubSection) => {
        this.subsection = data;
        console.log('hello');
        console.log(this.subsection);
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  payment(price) {
    this.subsectionService.getPayment(price).then((data: InterFaceSubSection) => {
        console.log(1, data);
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }
}
