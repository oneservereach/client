import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseURL = "http://localhost:8080/api/v1/person";

  constructor(private httpClient: HttpClient) { }
  
  getPersonsList(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`${this.baseURL}`);
  }

  createPerson(person: Person): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, person);
  }

  getPersonById(id: number): Observable<Person>{
    return this.httpClient.get<Person>(`${this.baseURL}/${id}`);
  }

  updatePerson(id: number, person: Person): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, person);
  }

  deletePerson(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
