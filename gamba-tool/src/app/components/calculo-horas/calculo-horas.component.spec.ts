import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoHorasComponent } from './calculo-horas.component';

describe('CalculoHorasComponent', () => {
  let component: CalculoHorasComponent;
  let fixture: ComponentFixture<CalculoHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoHorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
