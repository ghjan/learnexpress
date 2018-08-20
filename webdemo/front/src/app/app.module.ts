import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {JumbotronServive} from './jumbotron.service';
import {Code404Component} from './code404/code404.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {UsersModule} from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JumbotronServive,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
