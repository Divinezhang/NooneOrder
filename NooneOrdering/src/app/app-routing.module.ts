import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    // 动态路由传值
    path:'pcontent/:id',component:PcontentComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
