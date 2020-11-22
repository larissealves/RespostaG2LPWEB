import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Resposta } from '../app.model';

@Component({
  selector: 'app-responder-exercicio',
  templateUrl: './responder-exercicio.component.html',
  styleUrls: ['./responder-exercicio.component.css']
})
export class ResponderExercicioComponent implements OnInit {
  aulasDoCurso = [];
  exerciciosDaAula = [];
  todosExercicios: any;
  todasAulas: any;
  cursoId: any;
  curso: number;
  aulaId: number;
  resposta: any;
  respondido = false;
  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.curso = id;
      this.postsService.detalheCurso(id).subscribe(retorno =>{
        this.cursoId = retorno
      });
     console.log('curso??',this.cursoId);
    });
    this.respondido = false;
    this.obterAulas();
    this.obterExercicios();
  }

  
  salvarResposta(){
    this.resposta = new  Resposta(this.resposta);
    this.resposta=null;
    this.respondido = true;
  }

  obterExercicios(){
    this.postsService.obterExercicios().subscribe(retorno => {
      this.todosExercicios = retorno;
      this.todosExercicios.map(aula => {
        console.log('map:', aula);
        if(aula.aula === this.aulaId){
          this.exerciciosDaAula.push(aula);
          console.log('EXERCICIOS', this.exerciciosDaAula);
          this.respondido=false;
        }else{
          //console.log("N entrou:", aula);
        }
      })
    });

    }
   obterAulas(){
    this.postsService.obterAulas().subscribe(retorno => {
      this.todasAulas = retorno;
      this.todasAulas.map(aula => {
        this.aulaId = aula.id;
        console.log('map:', aula);
        if(aula.curso === this.curso){
          this.aulasDoCurso.push(aula);
          console.log('aula', this.aulasDoCurso)
        }else{
          //console.log("N entrou:", aula);
        }
      });
    });
  }

}
