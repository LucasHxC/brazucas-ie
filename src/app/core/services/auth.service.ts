import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign in with Google
  async signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  // Sign out
  async signOut() {
    return this.afAuth.signOut();
  }
}
