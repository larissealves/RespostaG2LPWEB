import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  cpf: number;
  nome: string;
  senha: string;
  dataNascimento: any;

  alunos: any;
  idAlunoCadastrado: number;

  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(): void {
  
  }

  salvarAluno() {
    let aluno = {"cpf": this.cpf, "nome":this.nome, "senha":this.senha, "dataNascimento":this.dataNascimento}
    this.postsService.adicionarAluno(aluno).subscribe();
    this.router.navigate(['/inscricao-aluno-curso']);
  }



}
