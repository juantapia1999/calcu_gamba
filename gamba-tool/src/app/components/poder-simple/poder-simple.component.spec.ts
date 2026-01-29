import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderSimpleComponent } from './poder-simple.component';

describe('PoderSimpleComponent', () => {
  let component: PoderSimpleComponent;
  let fixture: ComponentFixture<PoderSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoderSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
