import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTituloComponent } from './card-titulo.component';

describe('CardTituloComponent', () => {
  let component: CardTituloComponent;
  let fixture: ComponentFixture<CardTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
