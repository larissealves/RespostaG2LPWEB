import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAulaExercicioComponent } from './cadastro-aula-exercicio.component';

describe('CadastroAulaExercicioComponent', () => {
  let component: CadastroAulaExercicioComponent;
  let fixture: ComponentFixture<CadastroAulaExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAulaExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAulaExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
