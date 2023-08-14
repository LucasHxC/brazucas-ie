import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      map(user => {
        // Replace with your appropriate role namespace
        const roles = user?.['http://brazucas.ie/roles'];
        return roles && roles.includes('Administrator');
      }),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/unauthorized']);
        }
      })
    );
  }
}
