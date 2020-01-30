import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})

export class SubsectionComponent {
  buyModal = {
    show: false,
    price: '',
    slug: '',
    sale: 0,
  };
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

  promo = '';

  constructor(private subsectionService: SubsectionService,
              private httpService: HttpService,
              public globalParamsUser: GlobalParamsUser,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getSubsection(params.id);
      }
    );
  }

  changeShowBuy(price, slug) {
    this.buyModal = {
      show: true,
      price: price,
      slug: slug,
      sale: 0
    };
  }

  usePromotionalCode() {
    if (this.promo !== '') {
      this.buyModal.price = '20000';
    }

    this.subsectionService.usePromotionalCode({
      price: this.buyModal.price,
      slug: this.buyModal.slug,
      promo: this.promo
    }).then((data: { price: string, percent: number }) => {
        this.buyModal.price = data.price;
        this.buyModal.sale = data.percent;
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  getSubsection(slug) {
    this.subsectionService.getSubSection(slug).then((data: InterFaceSubSection) => {
        this.subsection = data;
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  payment(price) {
    this.subsectionService.getPayment(price).then((data: InterFaceSubSection) => {
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }
}
