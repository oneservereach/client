import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Connection } from './connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private baseURL = "http://localhost:8080/api/v1/connection";

  constructor(private httpClient: HttpClient) { }
  
  getConnectionsList(): Observable<Connection[]>{
    return this.httpClient.get<Connection[]>(`${this.baseURL}`);
  }

  createConnection(connection: Connection): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, connection);
  }

  getConnectionById(id: number): Observable<Connection>{
    return this.httpClient.get<Connection>(`${this.baseURL}/${id}`);
  }

  updateConnection(id: number, connection: Connection): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, connection);
  }

  deleteConnection(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
