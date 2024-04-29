import { Routes } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormPageComponent } from './form-page/form-page.component';

export const routes: Routes = [
    {path: 'home', component: PublicPageComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'admin/new', component: FormPageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},];
