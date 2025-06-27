// src/app/profile/profile.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: `
    <div style="max-width: 600px; margin: 2rem auto; text-align: center;">
      <h1>Welcome to your Profile!</h1>
    </div>
  `,
})
export class ProfileComponent {
  constructor(private authService: AuthService, private router: Router) {}
}
