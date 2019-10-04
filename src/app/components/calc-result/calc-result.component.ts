import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.scss']
})
export class CalcResultComponent {
  @Input() result = '';
}
