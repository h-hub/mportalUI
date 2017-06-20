import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule, MdDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie/movie.component';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';
import { AlertDialog } from './notification/alert-dialog.component';

import { AlertService, AuthenticationService, UserService, DialogService } from './services/services';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    CreateMovieComponent,
    AboutComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    AlertDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    MdDialogModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'create_movie',
        component: CreateMovieComponent, canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: UserComponent
      },
      {
        path: 'create_user',
        component: CreateUserComponent
      }
    ])
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    UserService,
    DialogService
  ],
  entryComponents: [
    AlertDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

