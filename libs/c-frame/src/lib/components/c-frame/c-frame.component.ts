import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild } from '@angular/core';
import { CFrameService } from "../../services/c-frame.service";
@Component({
  selector: 'c-frame',
  templateUrl: './c-frame.component.html',
  styleUrls: ['./c-frame.component.scss']
})
export class CFrameComponent implements OnInit {
  @Input() modulePath : string;
  @Input() componentName : string;
  @Output() abc : any =  new EventEmitter();
  // @ViewChild("dynamicComponent",{static : true}) dc : ViewContainerRef

  constructor(
    private cFrameService : CFrameService,
    private viewContainerRef : ViewContainerRef
    
  ) { }

  ngOnInit() {
    this.cFrameService.getComponentFromLazyModule(this.modulePath, this.componentName).then((comp) => {
      this.viewContainerRef.createComponent(comp);
    })
  }
}
