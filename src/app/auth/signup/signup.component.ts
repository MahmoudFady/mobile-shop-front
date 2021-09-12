import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.css', './signup.component.css'],
})
export class SignupComponent {
  signupErrMsg: string | null = null;
  loading = false;
  signupData = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    address: new FormGroup({
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
    }),
    password: new FormControl(null, [Validators.required]),
  });
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getAuthErrorMsg().subscribe((msg) => {
      this.signupErrMsg = msg;
      this.loading = false;
    });
  }
  signup(): void {
    this.loading = true;
    this.authService.siginup(this.signupData.value);
    this.signupData.get('email')?.patchValue(null);
  }
  get f() {
    return this.signupData.controls;
  }
}
