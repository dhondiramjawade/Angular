import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a-cm-temp',
  templateUrl: './cm-temp.component.html',
  styleUrls: ['./cm-temp.component.scss']
})
export class CmTempComponent implements OnInit {
  @Input() name : string;
  @Input() abc: string;
  constructor() { }

  ngOnInit() {
  }

}
