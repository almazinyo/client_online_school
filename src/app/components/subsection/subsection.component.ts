import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  subsection: InterFaceSubSection = {
    thing: '',
    section: '',
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
}
