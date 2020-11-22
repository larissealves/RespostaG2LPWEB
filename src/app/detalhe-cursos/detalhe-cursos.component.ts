import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-cursos',
  templateUrl: './detalhe-cursos.component.html',
  styleUrls: ['./detalhe-cursos.component.css']
})
export class DetalheCursosComponent implements OnInit {

  cursoId: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.postsService.detalheCurso(id).subscribe(retorno =>{
        this.cursoId = retorno
      })
     console.log('curso??',this.cursoId);
    })
  }
   

}
