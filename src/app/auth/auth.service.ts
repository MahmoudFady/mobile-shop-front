import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly urlBase = 'http://localhost:3000/';
  private authErrorMsg = new Subject<string | null>();
  private isAuth = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {}
  private removeItem(key: string) {
    localStorage.removeItem(key);
  }
  private setItem(key: string, token: string) {
    localStorage.setItem(key, token);
  }
  private setUpAuthSetting(token: string, userId: string) {
    this.authErrorMsg.next(null);
    this.isAuth.next(true);
    this.setItem('token', token);
    this.setItem('userId', userId);
    this.router.navigate(['/user/profile']);
  }
  getToken() {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : null;
    return token;
  }
  getUserId() {
    return localStorage.getItem('userId');
  }
  signin(user: { email: string; password: string }) {
    const { email, password } = user;
    this.http
      .post(this.urlBase + 'user/signin', {
        email,
        password,
      })
      .subscribe(
        (response: any) => {
          this.setUpAuthSetting(response.token, response.user._id);
        },
        (error) => {
          this.authErrorMsg.next('email or password is wrong');
          this.isAuth.next(false);
        }
      );
  }
  siginup(user: {
    name: string;
    email: string;
    phone: number;
    address: {
      country: string;
      state: string;
      city: string;
    };
    password: string;
  }) {
    const { name, email, phone, address, password } = user;
    const { country, state, city } = address;
    this.http
      .post(this.urlBase + 'user/signup', {
        name,
        email,
        phone,
        country,
        state,
        city,
        password,
      })
      .subscribe(
        (response: any) => {
          this.setUpAuthSetting(response.token, response.user._id);
        },
        (error) => {
          this.authErrorMsg.next('email already registered');
          this.isAuth.next(false);
        }
      );
  }

  logout() {
    this.isAuth.next(false);
    this.removeItem('token');
    this.removeItem('userId');
  }
  getAuthErrorMsg(): Observable<string | null> {
    return this.authErrorMsg.asObservable();
  }
  getAuth(): Observable<boolean> {
    return this.isAuth.asObservable();
  }
}
