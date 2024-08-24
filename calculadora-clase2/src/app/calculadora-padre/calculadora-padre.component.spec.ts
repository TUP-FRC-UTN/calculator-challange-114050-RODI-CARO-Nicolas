import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPadreComponent } from './calculadora-padre.component';

describe('CalculadoraPadreComponent', () => {
  let component: CalculadoraPadreComponent;
  let fixture: ComponentFixture<CalculadoraPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
