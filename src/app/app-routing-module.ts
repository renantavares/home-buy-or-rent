import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['auth/sign-in']);
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth/sign-in', loadComponent: () => import('./auth/sign-in/sign-in.component').then(m => m.SignInComponent) },
  { path: 'auth/sign-up', loadComponent: () => import('./auth/sign-up/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'landing-page', loadComponent: () => import('./landing-page/landing-page.component').then(m => m.LandingPageComponent) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard], data: { authGuardPipe: redirectToLogin } },
  { path: 'profile', loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent), canActivate: [AuthGuard], data: { authGuardPipe: redirectToLogin } },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
