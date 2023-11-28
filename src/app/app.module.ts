import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavBarModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-red-social',
        appId: '1:306050098007:web:c5936de5ac60db95681412',
        storageBucket: 'fir-red-social.appspot.com',
        apiKey: 'AIzaSyBQnvwJZOZxmjHMa6wJ3hnBOwZqJL-1Sho',
        authDomain: 'fir-red-social.firebaseapp.com',
        messagingSenderId: '306050098007',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
