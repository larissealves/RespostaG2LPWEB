import { Injectable } from '@angular/core';
import { Curso } from './app.model';
import { Aluno } from './app.model';
import { Aula } from './app.model';
import { Exercicio } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, api } from 'src/environments/environment';


@Injectable()

export class PostsService {

  exercicios = [];
  
  constructor(private http: HttpClient) {}

  adicionar(curso: Curso) {
    return this.http.post(`${environment.apiUrl}/cursos/`, curso);
  }

  obterCursos(){
    return this.http.get(`${environment.apiUrl}/cursos/`);
  }

  detalheCurso(id:number) {
    return this.http.get(`${environment.apiUrl}/cursos/${id}/`);
  }

  obterProfessores(){
     return this.http.get(`${environment.apiUrl}/professores/`);
  }

  obterAlunos(){
    return this.http.get(`${environment.apiUrl}/alunos/`);
  }


  adicionarAluno(aluno: Aluno) {
    return this.http.post(`${environment.apiUrl}/alunos/`, aluno);
  }

  idAluno(id: number){
    return this.http.get(`${environment.apiUrl}/alunos/${id}/`);
  }

  atualizarAluno(aluno: Aluno, id: number){
    return this.http.put(`${environment.apiUrl}/alunos/${id}/`, aluno);
  }

  adicionarAula(aula: Aula) {
    return this.http.post(`${environment.apiUrl}/aulas/`, aula);
  }

  obterAulas(){
    return this.http.get(`${environment.apiUrl}/aulas/`);
  }

  detalheAula(id:number) {
    return this.http.get(`${environment.apiUrl}/aulas/${id}/`);
  }

  excluirAula(id:number) {
    return this.http.delete(`${environment.apiUrl}/aulas/${id}/`);
  }

  adicionarExercicio(exercicio: Exercicio){
    return this.http.post(`${api.apiUrl}/exercicios/`, exercicio);
  }

  obterExercicios(){
    return this.http.get(`${api.apiUrl}/exercicios/`);
  }

  excluirExercicio(id){
    return this.http.delete(`${api.apiUrl}/exercicios/${id}/`);
  }
  /*
  

  excluir(post: number | Post) {
    let id;
    if (typeof post === 'number') {
      id = post;
    } else {
      id = post.id;
    }
    return this.http.delete(this.API_URL + id);
  }*/
}
