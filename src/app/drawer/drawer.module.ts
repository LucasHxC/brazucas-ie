import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DrawerRoutingModule } from './drawer-routing.module';

// Import all the page components
import { HomePage } from './home/home.page';
import { EventsPage } from './events/events.page';
import { EventDetailsPage } from './event-details/event-details.page';
import { ArticlesPage } from './articles/articles.page';
import { ArticleDetailsPage } from './article-details/article-details.page';
import { MonthlyMeetingsPage } from './monthly-meetings/monthly-meetings.page';
import { UserProfilePage } from './user-profile/user-profile.page';

@NgModule({
  declarations: [
    // Declare all the page components
    HomePage,
    EventsPage,
    EventDetailsPage,
    ArticlesPage,
    ArticleDetailsPage,
    MonthlyMeetingsPage,
    UserProfilePage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    DrawerRoutingModule,
  ],
})
export class DrawerModule {}
