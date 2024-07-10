import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthService);
  const router = inject(Router);

  if (authSvc.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
