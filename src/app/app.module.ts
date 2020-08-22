import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { SelectComponent } from './select/select.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { GridComponent } from './grid/grid.component';
import {MortgageCalculaterTabComponent} from './mortgage-calculater-tab/mortgage-calculater-tab.component'
@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SelectComponent,
    NumberInputComponent,
    TextInputComponent,
    GridComponent,
    MortgageCalculaterTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
