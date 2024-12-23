import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'how-do-we-help',
        loadComponent: () => import('./pages/how-do-we-help/how-do-we-help.component').then(m => m.HowDoWeHelpComponent),
    },
    {
        path: 'why-agency',
        loadComponent: () => import('./pages/why-agency/why-agency.component').then(m => m.WhyAgencyComponent),
    },
    {
        path: 'why-me',
        loadComponent: () => import('./pages/why-me/why-me.component').then(m => m.WhyMEComponent),
    },
];
