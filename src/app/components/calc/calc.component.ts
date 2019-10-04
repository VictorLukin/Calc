import {Component, EventEmitter, Output} from '@angular/core';
import {isUndefined} from 'util';

// import {Console} from 'inspector';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent {

  expression = '';
  symbol: string;
  result = '';
  savedExpression = '';
  restoredExpression = '';

  // @Output() sendSymbol: EventEmitter<string> = new EventEmitter<string>();

  receiveExpression(expression: string): void {
    this.symbol = '';
    if (expression === '') {
      this.result = '';
      return;
    }
    try {
      const res: number = eval(expression);
      if (isNaN(res) || isUndefined(res)) {
        this.result = 'Error in expression.';
      } else {
        this.result = res.toString();
      }
    } catch (e) {
      this.result = e.message;
    }
  }

  receiveSymbol(symbol: string): void {
    this.symbol = symbol;
  }

  saveExpression(expression: string): void {
    this.savedExpression = expression;
  }

  receiveSavedExpression(expression: string): void {
    this.receiveExpression(expression);
    this.restoredExpression = expression;
  }

}
