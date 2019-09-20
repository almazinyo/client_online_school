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
import {ProfilePromotionComponent} from './components/profile_promotion/profile_promotion.component';
import {ProfileDetailsComponent} from './components/profile_details/profile_details.component';
import {ProfileBuyComponent} from './components/profile_buy/profile_buy.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  {
    path: 'subsection',
    component: SubsectionComponent
  },
  {
    path: 'work',
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
  }
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
