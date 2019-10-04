import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent {
  @Output() calcButtonClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() symbol = '';

  onButtonClick() {
    this.calcButtonClick.emit(this.symbol);
  }
}
