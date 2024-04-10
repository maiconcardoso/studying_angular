import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosDeactivateGuard } from "../guards/alunos.deactivate.guard";

const alunosRouting: Routes = [
  {path: '', component: AlunosComponent, children: [
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunosDeactivateGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRouting)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {

}

