import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AlunosRoutingModule,
  ],
  exports: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
