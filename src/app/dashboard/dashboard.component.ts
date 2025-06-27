// src/app/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div style="max-width: 600px; margin: 2rem auto; text-align: center;">
      <h1>Welcome to your Dashboard!</h1>
      <p>You are logged in.</p>
    </div>
  `,
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}
}
