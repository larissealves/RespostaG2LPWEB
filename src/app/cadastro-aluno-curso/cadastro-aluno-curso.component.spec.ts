import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunoCursoComponent } from './cadastro-aluno-curso.component';

describe('CadastroAlunoCursoComponent', () => {
  let component: CadastroAlunoCursoComponent;
  let fixture: ComponentFixture<CadastroAlunoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAlunoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAlunoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
