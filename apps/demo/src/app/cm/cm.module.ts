import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmTempComponent } from './cm-temp/cm-temp.component';
import { CmRoutingModule } from "./cm-routing.module";


@NgModule({
  declarations: [CmTempComponent],
  imports: [
    CommonModule,
    CmRoutingModule
  ],
  entryComponents : [CmTempComponent],
  exports : [CmTempComponent]
})
export class CmModule { 
  static entry = CmTempComponent;
}
