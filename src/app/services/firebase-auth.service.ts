import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  firebaseAuth: AngularFireAuth;
  warningMessage = '';

  constructor(private afAuth: AngularFireAuth) {
    this.firebaseAuth = afAuth;
  }

  signUp(email: string, password: string) {
    //
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.warningMessage = '';
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.code);
        this.warningMessage = err.message.toString();
      });
  }

  logOut() {
    //
    this.afAuth.auth.signOut();
  }
}
