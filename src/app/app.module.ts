import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './components/auth/auth.component';
import {AuthService} from './components/auth/auth.service';
import {GlobalParams} from './storage/global-params';
import {MenuComponent} from './components/menu/menu.component';
import {MessageAlertComponent} from './components/message_alert/message_alert.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {GlobalParamsMessage} from './components/message_alert/global-params-message';
import {SectionComponent} from './components/section/section.component';
import {SubsectionComponent} from './components/subsection/subsection.component';
import {WorkComponent} from './components/work/work.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {BlogComponent} from './components/blog/blog.component';
import {InstructionComponent} from './components/instruction/instruction.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {intersectionObserverPreset, LazyLoadImageModule} from 'ng-lazyload-image';
import {HttpService} from './utils/http/http.service';
import {SectionService} from './components/section/section.service';
import {SubsectionService} from './components/subsection/subsection.service';
import {WorkService} from './components/work/work.service';
import {ReviewsService} from './components/reviews/reviews.service';
import {BlogService} from './components/blog/blog.service';
import {BlogDetailsComponent} from './components/blogDetails/blogDetails.component';
import {BlogDetailsService} from './components/blogDetails/blogDetails.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    MessageAlertComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SubsectionComponent,
    WorkComponent,
    ReviewsComponent,
    BlogComponent,
    InstructionComponent,
    BreadcrumbsComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    })

  ],
  providers: [
    GlobalParams,
    AuthService,
    GlobalParamsMessage,
    HttpService,
    SectionService,
    SubsectionService,
    WorkService,
    ReviewsService,
    BlogService,
    BlogDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
