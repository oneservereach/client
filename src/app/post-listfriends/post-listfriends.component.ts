import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { PostService } from '../post.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-listfriends',
  templateUrl: './post-listfriends.component.html',
  styleUrls: ['./post-listfriends.component.css']
})
export class PostListFriendsComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.getConnectionsPostsList();
  }

  getConnectionsPostsList(){
    this.postService.getConnectionsPostsList().subscribe(data => {
      this.posts = data;
    });
  }
}
