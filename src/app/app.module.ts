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
import {WorkDetailsComponent} from './components/workDetails/workDetails.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {BlogComponent} from './components/blog/blog.component';
import {InstructionComponent} from './components/instruction/instruction.component';


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
    WorkDetailsComponent,
    ReviewsComponent,
    BlogComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    GlobalParams,
    AuthService,
    GlobalParamsMessage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
