import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { PostService } from '../post.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(){
    this.postService.getPostsList().subscribe(data => {
      this.posts = data;
    });
  }

  postDetails(id: number){
    this.router.navigate(['post-details', id]);
  }

  updatePost(id: number){
    this.router.navigate(['update-post', id]);
  }

  deletePost(id: number){
    this.postService.deletePost(id).subscribe( data => {
      console.log(data);
      this.getPosts();
    })
  }

  getConnectionsPostsList(){
    this.postService.getConnectionsPostsList().subscribe(data => {
      this.posts = data;
    });
  }
}
