import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MsAdalAngular6Module } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MsAdalAngular6Module.forRoot({
      tenant: 'xxxxxx-915d-4d67-aaf9-ce327e8fc59f',
      clientId: 'xxxxxx-1758-4e5f-a9e2-7aa5384dc655',
      redirectUri: window.location.origin,
      endpoints: {
        'https://localhost/Api/': 'xxx-bae6-4760-b434-xxx'
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage'
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
