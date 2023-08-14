import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomePage } from './drawer/home/home.page';
import { EventsPage } from './drawer/events/events.page';
import { EventDetailsPage } from './drawer/event-details/event-details.page';
import { ArticlesPage } from './drawer/articles/articles.page';
import { ArticleDetailsPage } from './drawer/article-details/article-details.page';
import { MonthlyMeetingsPage } from './drawer/monthly-meetings/monthly-meetings.page';
import { UserProfilePage } from './drawer/user-profile/user-profile.page';
import { RouteReuseStrategy } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    EventsPage,
    EventDetailsPage,
    ArticlesPage,
    ArticleDetailsPage,
    MonthlyMeetingsPage,
    UserProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AuthModule.forRoot({
      domain: 'process.env.dev-1jj7x7qid7hwvzc2.us.auth0.com',
      clientId: 'process.env.mQiCzDYpVn7VGND2C8PyQAqevxEPwwdW'
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
