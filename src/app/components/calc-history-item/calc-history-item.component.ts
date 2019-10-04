import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calc-history-item',
  templateUrl: './calc-history-item.component.html',
  styleUrls: ['./calc-history-item.component.scss']
})
export class CalcHistoryItemComponent {
  @Input() expression = '';
  @Output() itemButtonClick: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick() {
    this.itemButtonClick.emit(this.expression);
  }
}
