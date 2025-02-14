import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('auth guard')
  if(sessionStorage.getItem('user'))
    return true;
  else{
    alert('login first')
    return false;
  }
};
