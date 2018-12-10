import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-app-header></app-app-header>
  
  <br>
  <div class="container-fluid" style="height:489px">
  <router-outlet></router-outlet>
  </div>
   
  <br>
  <app-app-footer></app-app-footer>
  
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InnowaveAngularAssignment';
}
