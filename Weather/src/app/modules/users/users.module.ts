import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersManagerPageComponent } from './pages/users-manager-page/users-manager-page.component';

@NgModule({
  declarations: [UsersManagerPageComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
