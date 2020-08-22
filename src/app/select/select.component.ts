import { Component, OnInit, Input } from '@angular/core';
import { GeneraicComponents } from '../model/components';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
 @Input() obj:GeneraicComponents;
  constructor() { }

  ngOnInit(): void {
    this.obj.value=this.obj.options[0].value;
  }

  onChange(event){
  //  console.log(event.target.value);
    this.obj.value=event.target.value
  }

}
