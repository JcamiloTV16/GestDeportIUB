import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login-page/login-page').then(
        (m) => m.LoginPage
      ),
  },
  {
    path: 'principal',
    loadComponent: () =>
      import('./features/principal/pages/principal-page/principal-page').then(
        (m) => m.PrincipalPage
      ),
  },
  {
    path: 'usuarios',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/usuarios/pages/usuarios-page/usuarios-page').then(
        (m) => m.UsuariosPage
      ),
  },
  {
    path: 'deportes',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/deportes/pages/deportes-page/deportes-page').then(
        (m) => m.DeportesPage
      ),
  },
  {
    path: 'eventos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/eventos/pages/eventos-page/eventos-page').then(
        (m) => m.EventosPage
      ),
  },
  {
    path: 'equipos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/equipos/pages/equipos-page/equipos-page').then(
        (m) => m.EquiposPage
      ),
  },
  {
    path: 'instalaciones',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './features/instalaciones/pages/instalaciones-page/instalaciones-page'
      ).then((m) => m.InstalacionesPage),
  },
  {
    path: 'contacto',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/contacto/pages/contacto-page/contacto-page').then(
        (m) => m.ContactoPage
      ),
  },
  {
    path: '**',
    redirectTo: 'principal',
  },
];
