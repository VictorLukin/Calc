import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcHistoryItemComponent } from './calc-history-item.component';

describe('ClassHistoryItemComponent', () => {
  let component: CalcHistoryItemComponent;
  let fixture: ComponentFixture<CalcHistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcHistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
