import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  aluno: any;
  id: number;

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private router: Router) {

  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
      }
    );
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
