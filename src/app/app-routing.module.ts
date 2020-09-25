import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './entity/user/components/all-users/all-users.component';
import {UserDetailsComponent} from "./entity/user/components/user-details/user-details.component";

const routes: Routes = [
  {path: 'users', component : AllUsersComponent, children: [{
    path: 'details/:id', component : UserDetailsComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
