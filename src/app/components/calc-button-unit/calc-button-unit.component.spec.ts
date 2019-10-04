import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcButtonUnitComponent } from './calc-button-unit.component';

describe('ButtonUnitComponent', () => {
  let component: CalcButtonUnitComponent;
  let fixture: ComponentFixture<CalcButtonUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcButtonUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcButtonUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
