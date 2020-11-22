import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})

export class ListaPostComponent implements OnInit {
  curso: any;
  titulo: string;
  descricao: string;
  professorSelecionado = null;
  professores = [
    {nome: "Professor 01",
    },
    {nome: "Professor 02",
    },
    {nome: "Professor 03",
    }
  ];
  categoriaSelecionada: any;
  categorias = [
    {categoria: "Online", value: 1,
    },
    {categoria: "Presencial", value: 2,
    }
  ];
  aulas: any;

  cursos: any;
  
  
  constructor(private router: Router, private route: ActivatedRoute, private postsService: PostsService){}
  ngOnInit(): void{};  

  salvar() {
    let curs = {"titulo": this.titulo, "descricao":this.descricao, "professores":this.professorSelecionado, "aulas":this.aulas, "categorias":this.categoriaSelecionada}
    this.postsService.adicionar(curs).subscribe();
    this.router.navigate(['/inicio']);
    this.obterCursos();
  }

  obterCursos(){
    this.postsService.obterCursos().subscribe(retorno => {
      this.cursos = retorno;
      console.log('aa',this.cursos);
    });
 }
  
  /*obterPrfessores(){
     this.postsService.obterProfessores().subscribe(retorno => {
       this.professores = retorno;
       console.log(this.professores);
     });
  }*/

}
