import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcHistoryListComponent } from './calc-history-list.component';

describe('CalcHistoryListComponent', () => {
  let component: CalcHistoryListComponent;
  let fixture: ComponentFixture<CalcHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
