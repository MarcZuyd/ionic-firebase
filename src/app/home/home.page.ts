import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public fireAuth: AngularFireAuth) {

  }


  signOut() {
    this.fireAuth.auth.signOut().then(() => {
      // location.reload();
      // const email = this.fireAuth.auth.currentUser.email;
    });
  }
}
