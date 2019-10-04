import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-calc-button-unit',
  templateUrl: './calc-button-unit.component.html',
  styleUrls: ['./calc-button-unit.component.scss']
})
export class CalcButtonUnitComponent {

  @Output() sendSymbol = new EventEmitter<string>();

  receiveSymbol(symbol: string): void {
    this.sendSymbol.emit(symbol);
  }
}
