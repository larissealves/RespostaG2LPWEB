import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCursosComponent } from './detalhe-cursos.component';

describe('DetalheCursosComponent', () => {
  let component: DetalheCursosComponent;
  let fixture: ComponentFixture<DetalheCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
