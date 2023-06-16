import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { EventsPage } from './events/events.page';
import { EventDetailsPage } from './event-details/event-details.page';
import { ArticlesPage } from './articles/articles.page';
import { ArticleDetailsPage } from './article-details/article-details.page';
import { MonthlyMeetingsPage } from './monthly-meetings/monthly-meetings.page';
import { UserProfilePage } from './user-profile/user-profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'events',
    component: EventsPage,
  },
  {
    path: 'event-details/:id',
    component: EventDetailsPage,
  },
  {
    path: 'articles',
    component: ArticlesPage,
  },
  {
    path: 'article-details/:id',
    component: ArticleDetailsPage,
  },
  {
    path: 'monthly-meetings',
    component: MonthlyMeetingsPage,
  },
  {
    path: 'user-profile',
    component: UserProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerRoutingModule {}
