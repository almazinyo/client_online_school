import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  subsection: InterFaceSubSection = {
    thing: '',
    section: '',
    description: '',
    courses: [{
      background: '',
      name: '',
      description: '',
      lessons: [{
        name: '',
        price: '',
      }]
    }]
  };

  constructor(private subsectionService: SubsectionService) {
    this.subsectionService.getSubSection().then((data: InterFaceSubSection) => {
        this.subsection = data;
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }
}
