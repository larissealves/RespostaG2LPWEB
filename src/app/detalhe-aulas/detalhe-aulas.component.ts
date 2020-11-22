import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-aulas',
  templateUrl: './detalhe-aulas.component.html',
  styleUrls: ['./detalhe-aulas.component.css']
})
export class DetalheAulasComponent implements OnInit {

  aula: any;

  todosExercicios: any;
  idAula: number;
  exercicio: any;

  exerciciosDaAula = [];

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.idAula = id;
      this.postsService.detalheAula(id).subscribe(retorno =>{
        this.aula = retorno
      });
     console.log('aula??',this.aula);
    });
    this.obterExercicios();
  }

  salvarExercicio(){
    console.log('id aula salvar exer:',this.idAula);
    let exercicio = {"aula":this.idAula, "exercicio": this.exercicio}
    this.postsService.adicionarExercicio(exercicio).subscribe(retorno => {
      this.exercicio = null;
      this.obterExercicios();
    });
  }

  obterExercicios(){
    this.postsService.obterExercicios().subscribe(retorno => {
      this.todosExercicios = retorno;
      this.todosExercicios.map(aula => {
        console.log('map:', aula);
        if(aula.aula === this.idAula){
          this.exerciciosDaAula.push(aula);
        }else{
          //console.log("N entrou:", aula);
        }
      })
    });
  }

  excluirExercicio(id){
    this.postsService.excluirExercicio(id).subscribe(retorno => {
     this.obterExercicios();
    });
  }

}
