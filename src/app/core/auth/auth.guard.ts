import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.cargando()) return true;

  const usuario = authService.usuario();
  if (!usuario) {
    return router.parseUrl('/login');
  }

  // Si el rol es Deportista, no se permite el acceso a usuarios, instalaciones o contacto
  if (usuario.rol === 'Deportista') {
    const pathForbidden = ['usuarios', 'instalaciones', 'contacto'];
    const currentPath = route.routeConfig?.path;
    if (currentPath && pathForbidden.includes(currentPath)) {
      return router.parseUrl('/principal');
    }
  }

  return true;
};
