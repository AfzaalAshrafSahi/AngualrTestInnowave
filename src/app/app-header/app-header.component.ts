import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router}  from '@angular/router';
import { AuthenticateUserService } from '../services/authenticateUser';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
 
styles: [
  `.angular-logo {
      margin: 0 4px 3px 0;
      height: 35px;
      vertical-align: middle;
  }
  .fill-remaining-space {
    flex: 1 1 auto;
  }
  `
]
})
export class AppHeaderComponent implements OnInit {

isLoggedIn$: Observable<boolean>;                  // {1}

constructor(private authService: AuthenticateUserService,private router: Router) { }

ngOnInit() {
 
  this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
}

onLogout(){
  this.authService.logout();                      // {3}
}
}



