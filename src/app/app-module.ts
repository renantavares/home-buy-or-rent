import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule,
    AppHeaderComponent,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule

],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp({ projectId: "home-buy-or-rent", appId: "1:642245383207:web:ad1466496b0273d75d2a02", storageBucket: "home-buy-or-rent.firebasestorage.app", apiKey: "AIzaSyDrrwMWM3qFNDyHIDq9_S2-sMBkIvwYuDc", authDomain: "home-buy-or-rent.firebaseapp.com", messagingSenderId: "642245383207", measurementId: "G-YFY6KM6YFW" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideNativeDateAdapter()
  ],
  bootstrap: [App]
})
export class AppModule { }
