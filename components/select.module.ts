import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select/select';
import { HighlightPipe } from './select/select-pipes';
import { OffClickDirective } from './select/off-click';
import { SelectEmitterService } from './select/select-emitter.service'

@NgModule({
  imports: [CommonModule],
  declarations: [SelectComponent, HighlightPipe, OffClickDirective],
  exports: [SelectComponent, HighlightPipe, OffClickDirective],
  providers: [SelectEmitterService]
})
export class SelectModule {
}
