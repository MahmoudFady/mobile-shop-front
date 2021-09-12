import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinErrMsg: string | null = null;
  loading = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getAuthErrorMsg().subscribe((msg) => {
      this.signinErrMsg = msg;
      this.loading = false;
    });
  }
  signin(f: NgForm) {
    this.loading = true;
    this.authService.signin(f.value);
  }
}
