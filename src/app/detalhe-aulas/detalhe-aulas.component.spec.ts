import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAulasComponent } from './detalhe-aulas.component';

describe('DetalheAulasComponent', () => {
  let component: DetalheAulasComponent;
  let fixture: ComponentFixture<DetalheAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
