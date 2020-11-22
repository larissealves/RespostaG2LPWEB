import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { PostsService } from './posts.service';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetalheCursosComponent } from './detalhe-cursos/detalhe-cursos.component';
import { InicialComponent } from './inicial/inicial.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoCursoComponent } from './cadastro-aluno-curso/cadastro-aluno-curso.component';
import { CadastroAulaExercicioComponent } from './cadastro-aula-exercicio/cadastro-aula-exercicio.component';
import { InicioCadastroAulaExercicioComponent } from './inicio-cadastro-aula-exercicio/inicio-cadastro-aula-exercicio.component';
import { DetalheAulasComponent } from './detalhe-aulas/detalhe-aulas.component';
import { ResponderExercicioComponent } from './responder-exercicio/responder-exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostComponent,
    DetalheCursosComponent,
    InicialComponent,
    CadastroAlunoComponent,
    CadastroAlunoCursoComponent,
    CadastroAulaExercicioComponent,
    InicioCadastroAulaExercicioComponent,
    DetalheAulasComponent,
    ResponderExercicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



