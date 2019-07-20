import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {SectionComponent} from './components/section/section.component';
import {SubsectionComponent} from './components/subsection/subsection.component';
import {WorkComponent} from './components/work/work.component';
import {WorkDetailsComponent} from './components/workDetails/workDetails.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {BlogComponent} from './components/blog/blog.component';
import {InstructionComponent} from './components/instruction/instruction.component';

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
    path: 'work-details',
    component: WorkDetailsComponent
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
    path: 'instruction',
    component: InstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {
  }
}
