import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { DetalheCursosComponent } from './detalhe-cursos/detalhe-cursos.component';
import { InicialComponent } from './inicial/inicial.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoCursoComponent } from './cadastro-aluno-curso/cadastro-aluno-curso.component';
import { InicioCadastroAulaExercicioComponent } from './inicio-cadastro-aula-exercicio/inicio-cadastro-aula-exercicio.component';
import { CadastroAulaExercicioComponent } from './cadastro-aula-exercicio/cadastro-aula-exercicio.component';
import { DetalheAulasComponent } from './detalhe-aulas/detalhe-aulas.component';
import { ResponderExercicioComponent } from './responder-exercicio/responder-exercicio.component';


const routes: Routes = [
  { path: '', component: InicialComponent },
  //{ path: '**', component: InicialComponent },
  { path: 'inicio', component: InicialComponent },
  { path: 'empresa-cadastro-curso', component: ListaPostComponent },
  { path: 'detalhe-curso/:id', component: DetalheCursosComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  { path: 'inscricao-aluno-curso', component: CadastroAlunoCursoComponent },

  // ROTAS CADASTRO AULA EXERCICIOS
  { path: 'inicio-cadastro-aula-exercicio', component: InicioCadastroAulaExercicioComponent },
  { path: 'cadastro-aula-exercicio/:id', component: CadastroAulaExercicioComponent },
  { path: 'detalhe-aula/:id', component: DetalheAulasComponent },
  { path: 'aluno-aula/:id', component: ResponderExercicioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
