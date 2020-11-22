import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCadastroAulaExercicioComponent } from './inicio-cadastro-aula-exercicio.component';

describe('InicioCadastroAulaExercicioComponent', () => {
  let component: InicioCadastroAulaExercicioComponent;
  let fixture: ComponentFixture<InicioCadastroAulaExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCadastroAulaExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCadastroAulaExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
