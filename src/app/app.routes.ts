import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'marketing',
        loadComponent: () => import('./pages/marketing/marketing.component').then(m => m.MarketingComponent),
    },
];
