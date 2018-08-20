import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {JumbotronServive} from './jumbotron.service';
import {Code404Component} from './code404.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersModule} from './users/users.module';
import {AuthTokenService} from './authtoken.service';
import {BirthdaysModule} from './birthdays/birthdays.module';
import { BirthdayListComponent } from './birthdays/birthday-list/birthday-list.component';
import { BirthdayDetailComponent } from './birthdays/birthday-detail/birthday-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(), // bootstrap
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    BirthdaysModule
  ],
  providers: [JumbotronServive,
    UserService,
    AuthTokenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
