import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormComponent> {

  canDeactivate(
    component: AlunosFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Guarda de Desativação")
    return true;
  }
}
