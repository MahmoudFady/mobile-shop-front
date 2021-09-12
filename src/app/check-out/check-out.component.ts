import { AuthService } from './../auth/auth.service';
import { ProfileService } from './../profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { UserI } from '../profile/user.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent {
  userId: string | null = null;
  price: number = 0;
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
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      this.price = p.price;
    });
    const userId = this.authService.getUserId();
    if (userId) {
      this.profileService.getUserById(userId).subscribe((response) => {
        this.user = response.user;
      });
    }
  }
}
