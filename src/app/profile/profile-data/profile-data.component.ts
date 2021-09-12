import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserI } from '../user.model';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css'],
})
export class ProfileDataComponent {
  user: UserI = {
    _id: '',
    name: '',
    image: '',
    email: '',
    phone: 0,
    address: {
      country: '',
      state: '',
      city: '',
    },
  };
  userId: string | null = null;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.profileService
      .getUserById(this.userId as string)
      .subscribe((response) => {
        this.user = response.user;
      });
  }
}
