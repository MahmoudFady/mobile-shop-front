import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from './user.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  readonly urlBase = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getUserById(id: string) {
    return this.http.get<{ user: UserI }>(this.urlBase + 'user/' + id);
  }
}
