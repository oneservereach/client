import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { UpdateConnectionComponent } from './update-connection/update-connection.component';
import { PostListFriendsComponent } from './post-listfriends/post-listfriends.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    PersonListComponent,
    UpdatePersonComponent,
    CreatePostComponent,
    PostDetailsComponent,
    PostListComponent,
    UpdatePostComponent,
    CreateConnectionComponent,
    ConnectionDetailsComponent,
    ConnectionListComponent,
    UpdateConnectionComponent,
    PostListFriendsComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
