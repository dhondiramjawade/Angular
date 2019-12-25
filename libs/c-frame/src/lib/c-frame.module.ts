import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CFrameComponent } from './components/c-frame/c-frame.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CFrameComponent],
  exports : [CFrameComponent],
})
export class CFrameModule {
}
