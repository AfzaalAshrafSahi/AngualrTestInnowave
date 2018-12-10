import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent} from './app-login/app-login.component';
import {ShowsComponent} from './shows/shows.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {AuthGuard} from './services/userLoginCheck';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {ShowCastComponent} from './show-cast/show-cast.component';
import {ShowCrewComponent} from './show-crew/show-crew.component';
import {PeopleSearchComponent} from './people-search/people-search.component';
import {ContactComponent} from './contact/contact.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: 'shows',                      
    component: ShowsComponent,
    canActivate: [AuthGuard],      
    
  },
  {
    path: 'poeples',                        
    component: PeopleSearchComponent,
    canActivate: [AuthGuard],      
    
  },
  {
    path: 'personDetail/:id',                        
    component: PersonDetailComponent,
    canActivate: [AuthGuard],      
    
  },
  {
    path: 'peoplesearch',                      
    component: PersonDetailComponent,
    canActivate: [AuthGuard],      
    
  },
  
  {
    path: 'contact',                        
    component: ContactComponent,
       
     
  },
  {
    path: 'showDetail/:id',                      
    component: ShowDetailComponent,
    canActivate: [AuthGuard],
  },
  
  {
    path: 'detailCast/:id',                       
    component: ShowCastComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detailCrew/:id',                     
    component: ShowCrewComponent,
    canActivate: [AuthGuard],
  },
  
  
  {
    path: '',                        
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],        
    children: [
      {
        path: '',
        component: ShowsComponent    
      }
    ]
  },
  {
    path: '',
    component:AppLoginComponent , 
    children: [
      {
        path: 'login',
        component: LoginLayoutComponent    
      }
    ]
  },
  {
    path: '**',                        
    component: PageNotFoundComponent
        
    
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
