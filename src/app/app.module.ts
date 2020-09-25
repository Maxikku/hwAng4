import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './entity/user/components/user/user.component';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserDetailsComponent } from './entity/user/components/user-details/user-details.component';
import { PostCommentsComponent } from './entity/user/components/post-comments/post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    UserDetailsComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
