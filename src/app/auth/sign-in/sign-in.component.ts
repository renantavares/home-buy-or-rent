// src/app/auth/sign-in/sign-in.component.ts
import { Component } from '@angular/core';
import { AuthFormComponent } from '../auth-form/auth-form.component';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [AuthFormComponent, RouterModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  loading = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(credentials: { email: string; password: string }) {
    this.loading = true;
    this.error = '';
    this.authService.signIn(credentials.email, credentials.password)
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
