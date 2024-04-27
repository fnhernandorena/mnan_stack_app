import { Routes } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';

export const routes: Routes = [
    {path: 'home', component: PublicPageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},];
