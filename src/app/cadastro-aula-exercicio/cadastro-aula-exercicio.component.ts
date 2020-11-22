import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aula-exercicio',
  templateUrl: './cadastro-aula-exercicio.component.html',
  styleUrls: ['./cadastro-aula-exercicio.component.css']
})
export class CadastroAulaExercicioComponent implements OnInit {

  todasAulas: any;


  aulasDoCurso = [];

  curso: number;
  idAulaE: any;
 

  titulo: string;
  tempoDuracao: any;
  opcoes: any;
  respostaCerta: any;
  aula: number;
  tamanhoAulas: number;
  cursoId: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.curso = id;
      this.postsService.detalheCurso(id).subscribe(retorno =>{
        this.cursoId = retorno
        this.tamanhoAulas = this.cursoId.aulas.length;
      })
     
    });
    this.obterAulas();
  }

  salvarAula() {
    let aula = {"titulo": this.titulo, "tempoDuracao":this.tempoDuracao, "curso":this.curso}
    this.postsService.adicionarAula(aula).subscribe(retorno =>{
      this.obterAulas(); 
    });
  }

  obterAulas(){
    this.postsService.obterAulas().subscribe(retorno => {
      this.todasAulas = retorno;
      this.todasAulas.map(aula => {
        console.log('map:', aula);
        if(aula.curso === this.curso){
          this.aulasDoCurso.push(aula);
        }else{
          //console.log("N entrou:", aula);
        }
      });
    });
  }

  /*
  obterAulasId(id){
    this.postsService.detalheAula(id).subscribe(retorno => {
    this.idAulaE = retorno;
    });    
  }
  */

  excluirAulaId(id){
    this.postsService.excluirAula(id).subscribe(retorno =>{
      this.obterAulas();
    });
  }

}
