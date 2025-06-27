// src/app/auth/auth-form/auth-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  @Input() submitLabel = 'Submit';
  @Input() loading = false;
  @Input() errorMessage = '';
  @Output() submitted = new EventEmitter<{ email: string; password: string }>();
  @Output() googleLogin = new EventEmitter<void>();

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid && !this.loading) {
      const { email, password } = this.form.value;
      if (typeof email === 'string' && typeof password === 'string') {
        this.submitted.emit({ email, password });
      }
    }
  }
}
