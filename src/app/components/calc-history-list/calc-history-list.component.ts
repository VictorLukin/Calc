import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calc-history-list',
  templateUrl: './calc-history-list.component.html',
  styleUrls: ['./calc-history-list.component.scss']
})
export class CalcHistoryListComponent {
  expressions: string[] = new Array<string>();
  expressionsCount = 0;

  @Input() set expression(value: string) {
    if (value === '') {
      return;
    }
    this.expressions[this.expressionsCount] = value;
    this.expressionsCount++;
  }

  @Output() sendExpression: EventEmitter<string> = new EventEmitter<string>();

  onSendExpression(expression: string): void {
    this.sendExpression.emit(expression);
  }
}
