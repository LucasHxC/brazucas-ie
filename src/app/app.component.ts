import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-split-pane contentId="main-content">
        <ion-menu contentId="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-menu-toggle auto-hide="false" *ngFor="let p of pages">
                <ion-item [routerLink]="p.url" routerDirection="root" lines="none">
                  <ion-icon slot="start" [name]="p.icon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  `,
})
export class AppComponent1 {
  public pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Events', url: '/events', icon: 'calendar' },
    { title: 'Articles', url: '/articles', icon: 'newspaper' },
    { title: 'Monthly Meetings', url: '/monthly-meetings', icon: 'people' },
    { title: 'User Profile', url: '/user-profile', icon: 'person' },
  ];
}

export class AppComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
}

