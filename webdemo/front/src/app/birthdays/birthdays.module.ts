import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BirthdaysComponent} from './birthdays/birthdays.component';
import {BirthdayDetailComponent} from './birthday-detail/birthday-detail.component';
import {BirthdayListComponent} from './birthday-list/birthday-list.component';
import {BirthdayService} from './birthday.service';
import {AuthGuardService} from '../auth-guard.service';
import {BirthdaysRoutingModule} from './birthdays-routing.module';
import {AuthInterceptor} from '../auth_interceptor';

@NgModule({
  imports: [
    CommonModule,
    BirthdaysRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    BirthdayService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: [
    BirthdaysComponent,
    BirthdayListComponent,
    BirthdayDetailComponent
  ]
})
export class BirthdaysModule {
}
