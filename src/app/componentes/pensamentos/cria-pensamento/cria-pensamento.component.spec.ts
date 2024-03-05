import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPensamentoComponent } from './cria-pensamento.component';

describe('CriaPensamentoComponent', () => {
  let component: CriaPensamentoComponent;
  let fixture: ComponentFixture<CriaPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
