import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-cadastro-aluno-curso',
  templateUrl: './cadastro-aluno-curso.component.html',
  styleUrls: ['./cadastro-aluno-curso.component.css']
})
export class CadastroAlunoCursoComponent implements OnInit {
  alunos:  any;
  idAluno: number;
  todosCursos: any;
  inscrito = false;
  online = [];
  presencial = [];

  // '-'

  nome:any;
  cpf: any;
  dataNascimento: any;
  senha: any;
  cursos: any;

  idCursoInscrito: any;
  ultimoCadastro: any;

  todasAulas: any;
  cursoInscrito: any;
  aulasDoCursoInscrito: any;

  constructor(private postsService: PostsService){}
  ngOnInit(): void{
    this.obterCursos();
    this.obterAlunos();
  };  

  obterCursos(){
    this.postsService.obterCursos().subscribe(retorno => {
      this.todosCursos = retorno;
      this.todosCursos.map(curso => {
        console.log('map:', curso);
        if(curso.categorias == "Online"){ 
          this.online.push(curso);
          console.log("entrou:", curso);
        }else{
          this.presencial.push(curso);
          console.log("N entrou:", curso);
        }
      })
    });
  }

  obterAlunos(){
    this.postsService.obterAlunos().subscribe(retorno => {
      this.alunos = retorno;
      this.ultimoCadastro = this.alunos.slice(-1);
      console.log('Ultimo Cad',this.alunos.slice(-1));
    });
  }

  idCurso(item){
    this.idCursoInscrito = item
    
  }

  testeAtualizar(){
    this.ultimoCadastro.map(aula => {
        console.log('map:', aula);
        console.log("Id do user:",aula.id);
          this.idAluno = aula.id;
          this.nome = aula.nome;
          this.cpf = aula.cpf;
          this.dataNascimento = aula.dataNascimento;
          this.senha = aula.senha;
          this.cursos = this.idCursoInscrito;
          
    });
        let novosDados = {"cpf": this.cpf, "nome":this.nome, "senha":this.senha, "dataNascimento":this.dataNascimento, "cursos": this.cursos}
        this.postsService.atualizarAluno(novosDados, this.idAluno).subscribe(retorno => {
          this.buscaCurso();
        });

  }
    
  buscaCurso(){
    this.postsService.detalheCurso(this.cursos).subscribe(retorno => {
      this.cursoInscrito = retorno;
      console.log('aaat',this.cursoInscrito);
     
    });
  }

}
