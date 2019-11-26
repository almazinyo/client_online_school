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
import {GlobalParamsAuth} from './storage/global-params-auth';
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
import {BreadcrumbsService} from './components/breadcrumbs/breadcrumbs.service';
import {MenuService} from './components/menu/menu.service';
import {ProfilePromotionService} from './components/profile_promotion/profile_promotion.service';
import {ProfilePromotionComponent} from './components/profile_promotion/profile_promotion.component';
import {ProfileDetailsComponent} from './components/profile_details/profile_details.component';
import {ProfileDetailsService} from './components/profile_details/profile_details.service';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {TelephoneNumberPipe} from './pipes/telephone_number.pipe';
import {DigitsNumbersPipe} from './pipes/digits_numbers.pipe';
import {ProfileBuyComponent} from './components/profile_buy/profile_buy.component';
import {ProfileBuyService} from './components/profile_buy/profile_buy.service';
import {ProfilePointsService} from './components/profile_points/profile_points.service';
import {ProfilePointsComponent} from './components/profile_points/profile_points.component';
import {CallbackComponent} from './components/callback/callback.component';
import {CallbackService} from './components/callback/callback.service';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {EmbedVideo} from 'ngx-embed-video/dist';
import {TeacherComponent} from './components/teacher/teacher.component';
import {TeacherService} from './components/teacher/teacher.service';
import {TeacherDetalisComponent} from './components/teacher-detalis/teacherDetalis.component';
import {ProfileMenuComponent} from './components/profile-menu/profileMenu.component';
import {ProfilePromotionalCodeComponent} from './components/profile_promotional_code/profile_promotional_code.component';
import {ProfilePromotionalCodeService} from './components/profile_promotional_code/profile_promotional_code.service';
import {FooterService} from './components/footer/footer.service';
import {SocialLinkService} from './components/footer/social-link/social-link.service';
import {TeacherDetalisService} from './components/teacher-detalis/teacher-detalis.service';
import {ModalAuthComponent} from './components/modal_auth/modal_auth.component';
import { SocialLinkComponent } from './components/footer/social-link/social-link.component';
import {CookieService} from 'ngx-cookie-service';
import {SessionStorageService} from './storage/session-storage.service';
import {GlobalParamsUser} from './storage/global-params-user';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    DigitsNumbersPipe,
    TelephoneNumberPipe,
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
    BlogDetailsComponent,
    ProfilePromotionComponent,
    ProfileDetailsComponent,
    ProfileBuyComponent,
    ProfilePointsComponent,
    CallbackComponent,
    TeacherComponent,
    TeacherDetalisComponent,
    ProfileMenuComponent,
    ProfilePromotionalCodeComponent,
    ModalAuthComponent,
    SocialLinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    }),
    NgxMaskModule.forRoot(options)

  ],
  providers: [
    GlobalParamsAuth,
    AuthService,
    GlobalParamsMessage,
    HttpService,
    SectionService,
    SubsectionService,
    WorkService,
    ReviewsService,
    BlogService,
    BreadcrumbsService,
    MenuService,
    TeacherService,
    ProfilePromotionService,
    ProfileDetailsService,
    ProfileBuyService,
    ProfilePointsService,
    CallbackService,
    ProfilePromotionalCodeService,
    FooterService,
    SocialLinkService,
    TeacherDetalisService,
    CookieService,
    SessionStorageService,
    GlobalParamsUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
