import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Curso } from '../app.model';


@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
  cursosPresenciais = [];
  cursosOnline = [];
  cursos: any;
  
  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void{
    this.obterCursos();
    this.separarCategoria();
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

  separarCategoria(){
    /*if(this.cursos.filter(x => x.categorias ==="Online")){
        for(let curso of this.cursos){
          console.log('online', curso);
          this.cursosOnline.push(curso)
        }
      }
      if(this.cursos.map(x => x.categorias ==="Presencial")){
        for(let curso of this.cursos){
          this.cursosPresenciais.push(curso);
        }
      }
    }*/
    //console.log(this.cursos.filter(x => x.categorias ==="Online").map(y => y.value));
  }
}