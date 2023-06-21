import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign in with Google
  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  // Sign out
  async signOut() {
    return this.afAuth.signOut();
  }
}
