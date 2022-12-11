import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagerPageComponent } from './pages/users-manager-page/users-manager-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "users-manager",
    pathMatch: "full"
  }
  ,
  {
    path: "users-manager",
    component: UsersManagerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
