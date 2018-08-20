import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistComponent} from './regist/regist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UsersComponent} from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NgbModule
  ],
  declarations: [HomeComponent, LoginComponent, RegistComponent, UsersComponent]
})
export class UsersModule {
}
