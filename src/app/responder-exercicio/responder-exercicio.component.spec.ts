import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderExercicioComponent } from './responder-exercicio.component';

describe('ResponderExercicioComponent', () => {
  let component: ResponderExercicioComponent;
  let fixture: ComponentFixture<ResponderExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponderExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
