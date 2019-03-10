import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})


export class UserDataComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: FirebaseAuthService) { }

  ngOnInit() {
    this.user = this.auth.firebaseAuth.auth.currentUser;
    console.log(this.user.metadata.creationTime, this.user.metadata.lastSignInTime);
  }

}
