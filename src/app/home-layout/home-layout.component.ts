import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  // template: `
   
  // <app-app-header></app-app-header>
  
  // <br>
  // <div class="container-fluid" style="width:100%">
  // <router-outlet></router-outlet>
  // </div>
   
  // <br>
  // <app-app-footer></app-app-footer>
  // `,
  templateUrl: './home-layout.component.html',
  // template: `<p>this is home layout page
  // </p> <router-outlet></router-outlet>`,
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
