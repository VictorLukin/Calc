import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcExpressionComponent } from './calc-expression.component';

describe('CalcInputComponent', () => {
  let component: CalcExpressionComponent;
  let fixture: ComponentFixture<CalcExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
