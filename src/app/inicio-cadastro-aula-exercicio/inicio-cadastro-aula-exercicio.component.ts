import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-inicio-cadastro-aula-exercicio',
  templateUrl: './inicio-cadastro-aula-exercicio.component.html',
  styleUrls: ['./inicio-cadastro-aula-exercicio.component.css']
})
export class InicioCadastroAulaExercicioComponent implements OnInit {
  cursosPresenciais = [];
  cursosOnline = [];
  cursos: any;
  
  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void{
    this.obterCursos();
  };

  obterCursos(){
    this.postsService.obterCursos().subscribe(retorno => {
      this.cursos = retorno;
      console.log('todos cursos: ', this.cursos);
      this.cursos.map(curso => {
        console.log('map:', curso);
        if(curso.categorias == "Online"){
          this.cursosOnline.push(curso);
          console.log("entrou:", curso);
        }else{
          this.cursosPresenciais.push(curso);
          console.log("N entrou:", curso);
        }
      })
    });
  }
}
