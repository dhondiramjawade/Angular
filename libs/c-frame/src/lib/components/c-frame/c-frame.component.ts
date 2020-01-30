import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild , Injector} from '@angular/core';
import { CFrameService } from "../../services/c-frame.service";
@Component({
  selector: 'c-frame',
  templateUrl: './c-frame.component.html',
  styleUrls: ['./c-frame.component.scss']
})
export class CFrameComponent implements OnInit {
  @Input() modulePath : string;
  @Input() componentName : string;
  @Input() dataInput : any = {};
  @Input() dataOutput : any;
  @Output() abc : any =  new EventEmitter();

  constructor(
    private cFrameService : CFrameService,
    private viewContainerRef : ViewContainerRef,
    private injector : Injector
    
  ) { }

  ngOnInit() {
    this.cFrameService.getComponentFromLazyModule(this.modulePath, this.componentName).then((moduleFactory) => {
      const moduleRef=   moduleFactory.create(this.injector);
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const comp = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      const compRef = this.viewContainerRef.createComponent(comp);
      comp.inputs.forEach(input=> {
        if(this.dataInput[input.propName]){
          compRef.instance[input.propName] = this.dataInput[input.propName];
        }
      })
    })
  }
}
