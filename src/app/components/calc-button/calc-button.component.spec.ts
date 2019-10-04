import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcButtonComponent } from './calc-button.component';

describe('CalcButtunComponent', () => {
  let component: CalcButtonComponent;
  let fixture: ComponentFixture<CalcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
