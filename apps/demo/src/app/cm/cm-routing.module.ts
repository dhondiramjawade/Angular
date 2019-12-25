import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CmTempComponent } from './cm-temp/cm-temp.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component :CmTempComponent
    }])
  ]
})
export class CmRoutingModule { }
