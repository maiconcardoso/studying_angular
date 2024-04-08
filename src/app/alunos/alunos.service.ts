import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private listaAlunos: any[] = [
    {id:1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    {id:2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    {id:3, nome: 'Aluno 03', email: 'aluno03@email.com' },
    {id:4, nome: 'Aluno 04', email: 'aluno04@email.com' }
  ];

  getAlunos() {
    return this.listaAlunos;
  }

  getAluno(id: number) {
    let alunos: any[] = this.listaAlunos;
    for(let i=0; i<alunos.length; i++) {
      let aluno = alunos[i];
      if(aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}


