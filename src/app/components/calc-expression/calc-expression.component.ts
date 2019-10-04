import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calc-expression',
  templateUrl: './calc-expression.component.html',
  styleUrls: ['./calc-expression.component.scss']
})
export class CalcExpressionComponent {

  @Input() set symbol(value: string) {
    if (value === '') { return; }
    if (value === '=') {
      this.saveExpression.emit(this.expression);
      this.expression = '';
    } else if (value === '\x1b') {
      this.expression = '';
    } else {
      this.expression += value;
    }
    this.onSendExpression();
  }

  @Input() expression = '';
  @Output() sendExpression: EventEmitter<string> = new EventEmitter<string>();
  @Output() saveExpression: EventEmitter<string> = new EventEmitter<string>();
  @Output() clearSymbol: EventEmitter<string> = new EventEmitter<string>();

  onSendExpression(): void {
    this.sendExpression.emit(this.expression);
  }

  onSaveExpression(): void {
    this.symbol = '=';
  }

  onClearExpression(): void {
    this.symbol = '\x1b';
  }

}
