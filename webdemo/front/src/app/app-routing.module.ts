import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Code404Component} from './code404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {path: '**', component: Code404Component}, // 任何其他路径都匹配
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
