import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
}
  
)
export class AuthenticateUserService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  loginEmployees: any[]=
  [
  {name:"Afzaal",mailId:"afzaalsahi@gmail.com",password:'abc123'},
  {name:"Aslam",mailId:"aslam@gmail.com",password:'def123'},
];
  constructor(
    private router: Router
  ) {}

  login(user: User):boolean{
    var skinName =  this.loginEmployees.find(x=>x.mailId === user.userName && x.password===user.password);
    if(skinName)  { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/shows']);
      return true;
    }
    else{
      return false;
    }

  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}