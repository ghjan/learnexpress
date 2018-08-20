import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {JumbotronServive} from './jumbotron-servive.service';
import { Code404Component } from './code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [JumbotronServive],
  bootstrap: [AppComponent]
})
export class AppModule {
}
