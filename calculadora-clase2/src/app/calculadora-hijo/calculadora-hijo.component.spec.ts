import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraHijoComponent } from './calculadora-hijo.component';

describe('CalculadoraHijoComponent', () => {
  let component: CalculadoraHijoComponent;
  let fixture: ComponentFixture<CalculadoraHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
