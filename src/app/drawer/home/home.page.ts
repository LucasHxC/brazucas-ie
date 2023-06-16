import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import any other required modules, components, or services


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@NgModule({
  imports: [CommonModule, FormsModule],
})
export class HomePageModule {}

export class HomePage {
  constructor(private router: Router) {}

  navigateToEvents() {
    this.router.navigate(['/events']);
  }

  navigateToArticles() {
    this.router.navigate(['/articles']);
  }

  navigateToMonthlyMeetings() {
    this.router.navigate(['/monthly-meetings']);
  }

  navigateToUserProfile() {
    this.router.navigate(['/user-profile']);
  }
}
