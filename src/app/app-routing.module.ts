import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './drawer/home/home.page';
import { EventsPage } from './drawer/events/events.page';
import { EventDetailsPage } from './drawer/event-details/event-details.page';
import { ArticlesPage } from './drawer/articles/articles.page';
import { ArticleDetailsPage } from './drawer/article-details/article-details.page';
import { MonthlyMeetingsPage } from './drawer/monthly-meetings/monthly-meetings.page';
import { UserProfilePage } from './drawer/user-profile/user-profile.page';

export const routes: Routes = [
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
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
