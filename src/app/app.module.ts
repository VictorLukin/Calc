import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcButtonComponent } from './components/calc-button/calc-button.component';
import { CalcExpressionComponent } from './components/calc-expression/calc-expression.component';
import {FormsModule} from '@angular/forms';
import { CalcResultComponent } from './components/calc-result/calc-result.component';
import { CalcHistoryListComponent } from './components/calc-history-list/calc-history-list.component';
import { CalcHistoryItemComponent } from './components/calc-history-item/calc-history-item.component';
import { CalcButtonUnitComponent } from './components/calc-button-unit/calc-button-unit.component';
import { CalcComponent } from './components/calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcButtonComponent,
    CalcExpressionComponent,
    CalcResultComponent,
    CalcHistoryListComponent,
    CalcHistoryItemComponent,
    CalcButtonUnitComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
