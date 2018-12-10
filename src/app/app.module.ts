import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
 
import { ReactiveFormsModule} from '@angular/forms';
 import {MatButtonModule,MatCheckboxModule,MatTabsModule,MatDialogModule,MatFormField} from '@angular/material';
  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MaterialModule } from './app-header/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  AppLoginComponent} from './app-login/app-login.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {AuthenticateUserService  } from './services/authenticateUser';
import {showsCastDetailService } from './services/getApiData';
import {  AuthGuard} from './services/userLoginCheck';
import { ShowsComponent } from './shows/shows.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ShowCastComponent } from './show-cast/show-cast.component';
import { ShowCrewComponent } from './show-crew/show-crew.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,AppLoginComponent, AppFooterComponent, ShowsComponent, ShowDetailComponent, HomeLayoutComponent, LoginLayoutComponent, PeopleSearchComponent, PersonDetailComponent, ShowCastComponent, ShowCrewComponent, ContactComponent, PageNotFoundComponent, ContactDialogComponent
 
  ],
  imports: [
  
    BrowserModule,FormsModule, ReactiveFormsModule,HttpClientModule,
    AppRoutingModule ,MaterialModule,
    BrowserAnimationsModule  ,MatButtonModule,MatCheckboxModule,MatTabsModule,MatDialogModule 
    
  ],
  providers: [AuthenticateUserService,AuthGuard,showsCastDetailService],
  entryComponents:[ContactDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
