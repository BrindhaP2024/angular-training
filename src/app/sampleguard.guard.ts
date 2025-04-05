import { CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const sampleguardGuard: CanActivateFn = (route,state:RouterStateSnapshot) => {
  return true;
};
