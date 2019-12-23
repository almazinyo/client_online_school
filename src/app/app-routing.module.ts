import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {SectionComponent} from './components/section/section.component';
import {SubsectionComponent} from './components/subsection/subsection.component';
import {WorkComponent} from './components/work/work.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {BlogComponent} from './components/blog/blog.component';
import {InstructionComponent} from './components/instruction/instruction.component';
import {BlogDetailsComponent} from './components/blogDetails/blogDetails.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {TeacherDetalisComponent} from './components/teacher-detalis/teacherDetalis.component';
import {ProfileDetailsComponent} from './components/profile_details/profile_details.component';
import {ProfilePromotionComponent} from './components/profile_promotion/profile_promotion.component';
import {ProfileBuyComponent} from './components/profile_buy/profile_buy.component';
import {ProfilePointsComponent} from './components/profile_points/profile_points.component';
import {ProfilePromotionalCodeComponent} from './components/profile_promotional_code/profile_promotional_code.component';
import {CallbackComponent} from './components/callback/callback.component';
import {ProfilePayComponent} from './components/profile_pay/profile_pay.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'section/:id',
    component: SectionComponent
  },
  {
    path: 'subsection/:id',
    component: SubsectionComponent
  },
  {
    path: 'work/:id',
    component: WorkComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'instruction',
    component: InstructionComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'teacher/:id',
    component: TeacherDetalisComponent
  },
  {
    path: 'profile-details',
    component: ProfileDetailsComponent
  },
  {
    path: 'profile-promotion',
    component: ProfilePromotionComponent
  },
  {
    path: 'profile-buy',
    component: ProfileBuyComponent
  },
  {
    path: 'profile-pay',
    component: ProfilePayComponent
  },
  {
    path: 'profile-points',
    component: ProfilePointsComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'profile-promotional-code',
    component: ProfilePromotionalCodeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {
  }
}
