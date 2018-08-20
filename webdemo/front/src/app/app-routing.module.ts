import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    // 引入路由规则
    RouterModule.forRoot(routes)],
  exports: [
    // 暴露路由模块
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
