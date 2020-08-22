import { Component, OnInit, Input } from '@angular/core';
import { Panel } from '../model/components';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() renderObj:Panel;
  constructor() { }

  ngOnInit(): void {
   console.log(this.renderObj.components)
  }

}
