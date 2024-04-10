import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
      console.log(childRoute);
      console.log(state);
      return true;
  }
}
