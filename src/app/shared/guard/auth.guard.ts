import { CanActivateFn } from '@angular/router';

export function authGuard() {
  if (!!sessionStorage.getItem("user")) {
    return true;
  }else{
    return false;
  }

}
