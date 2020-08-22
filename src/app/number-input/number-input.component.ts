import { Component, OnInit, Input } from '@angular/core';
import { GeneraicComponents } from '../model/components';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
 @Input() obj:GeneraicComponents
  constructor() { }

  ngOnInit(): void {
  }

}
