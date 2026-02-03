import { Routes } from '@angular/router';
import { AppHome } from './app-home/app-home';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: AppHome }, // Chemin vide = page d'accueil
  { path: 'contact', component: Contact }
];
