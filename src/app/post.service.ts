import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL = "http://localhost:8080/api/v1/post";
  private connectionsURL = "http://localhost:8080/api/v1/post/connections";


  constructor(private httpClient: HttpClient) { }
  
  getPostsList(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseURL}`);
  }

  getPostsListFriends(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseURL}`);
  }

  createPost(post: Post): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, post);
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.baseURL}/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, post);
  }

  deletePost(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getConnectionsPostsList(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.connectionsURL}`);
  }
}
