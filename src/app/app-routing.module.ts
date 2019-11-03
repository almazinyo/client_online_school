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
import {ProfilePromotionComponent} from './components/profile_promotion/profile_promotion.component';
import {ProfileDetailsComponent} from './components/profile_details/profile_details.component';
import {ProfileBuyComponent} from './components/profile_buy/profile_buy.component';
import {ProfilePointsComponent} from './components/profile_points/profile_points.component';
import {CallbackComponent} from './components/callback/callback.component';
import {TeacherService} from './components/teacher/teacher.service';
import {TeacherDetalisComponent} from './components/teacher-detalis/teacherDetalis.component';

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
  /*{
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'profile-promotion',
    component: ProfilePromotionComponent
  },
  {
    path: 'profile-details',
    component: ProfileDetailsComponent
  },
  {
    path: 'profile-buy',
    component: ProfileBuyComponent
  },
  {
    path: 'profile-points',
    component: ProfilePointsComponent
  }*/
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
