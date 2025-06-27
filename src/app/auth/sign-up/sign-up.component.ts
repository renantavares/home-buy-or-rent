// src/app/auth/sign-up/sign-up.component.ts
import { Component } from '@angular/core';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AuthFormComponent, RouterModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  loading = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(credentials: { email: string; password: string }) {
    this.loading = true;
    this.error = '';
    this.authService.signUp(credentials.email, credentials.password)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((err) => this.error = err.message)
      .finally(() => this.loading = false);
  }

  onGoogleLogin() {
    this.loading = true;
    this.error = '';
    this.authService.signInWithGoogle()
      .then(() => this.router.navigate(['/dashboard']))
      .catch((err) => this.error = err.message)
      .finally(() => this.loading = false);
  }
}
