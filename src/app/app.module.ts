import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule, MdDialogModule, MdButtonModule, MdTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MovieComponent } from './movie/movie/movie.component';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AlertDialog } from './notification/alert-dialog.component';
import { AlertComponent } from './notification/alert.component';

import { AlertService, AuthenticationService, UserService, DialogService, SessionService, Config } from './services/services';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MovieComponent,
    CreateMovieComponent,
    AboutComponent,
    UserComponent,
    CreateUserComponent,
    LoginComponent,
    RegisterComponent,
    AlertDialog,
    AlertComponent
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
    MdButtonModule,
    MdTooltipModule,
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
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    UserService,
    DialogService,
    SessionService,
    Config
  ],
  entryComponents: [
    AlertDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

