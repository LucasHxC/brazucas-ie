import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: 'onboarding.page.html',
  styleUrls: ['onboarding.page.scss'],
})
export class OnboardingPage {
  constructor(private router: Router) {}

  finishOnboarding() {
    // Perform any necessary actions when onboarding is finished
    // For example, navigate to the home page
    this.router.navigate(['/home']);
  }
}
