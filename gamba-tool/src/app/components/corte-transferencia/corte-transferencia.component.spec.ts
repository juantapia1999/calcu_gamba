import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteTransferenciaComponent } from './corte-transferencia.component';

describe('CorteTransferenciaComponent', () => {
  let component: CorteTransferenciaComponent;
  let fixture: ComponentFixture<CorteTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorteTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
