import { Component, OnInit} from '@angular/core';
import { Curso } from './app.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void{
    
  }; 

  

  /*atualizarLista() {
    this.postsService.todosPost().subscribe(post => {
    this.listasPost = post; });
  }

  salvar(): void {
    this.NullPost.descricao = this.descricao;

    this.postsService
      .salvar(this.NullPost.id, this.NullPost.descricao, this.NullPost.curti)
      .subscribe(
        (dado) => {
          this.atualizarLista();
        },
        (erro) => console.error(erro)
      );

    this.descricao = null;
    this.NullPost = { id: 0, descricao: '', curti: false };
  }

  excluir(post): void {
    if (this.NullPost === post) {
      alert('Não é possivel deletar disciplina em edicão');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina ?')) {
        this.postsService.excluir(post).subscribe(
          (dados) => this.atualizarLista(),
          (erro) => console.error(erro)
        );
      }
    }
  }

  editar(post): void {
    this.descricao = post.descricao;
    this.NullPost = post;
  }*/
}
