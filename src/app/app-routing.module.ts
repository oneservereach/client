import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListFriendsComponent } from './post-listfriends/post-listfriends.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';

const routes: Routes = [
  {path: 'persons', component: PersonListComponent},
  {path: 'create-person', component: CreatePersonComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'update-person/:id', component: UpdatePersonComponent},
  {path: 'person-details/:id', component: PersonDetailsComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'post-listfriends', component: PostListFriendsComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'update-post/:id', component: UpdatePostComponent},
  {path: 'post-details/:id', component: PostDetailsComponent},
  {path: 'control-panel', component: ControlPanelComponent},
  {path: 'connections', component: ConnectionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
