import { ApplicationConfig, importProvidersFrom ,provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';


import { initializeApp } from 'firebase/app';
import { MessageService } from 'primeng/api';
const firebaseConfig = {
  apiKey: "AIzaSyC7Z3KJ7wf3UnVCivECRTdqVK_c_K1Qf_M",
  authDomain: "angularfire-ee63e.firebaseapp.com",
  projectId: "angularfire-ee63e",
  storageBucket: "angularfire-ee63e.appspot.com",
  messagingSenderId: "600501089051",
  appId: "1:600501089051:web:74230bed900f3b279719be"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),MessageService,  
    importProvidersFrom(
    [HttpClientModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule]

  ) ]

};
