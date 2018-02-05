import { ButtonsModule, TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { ChildrenDemoComponent } from './components/select/children-demo';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { NgModule } from '@angular/core';
import { RichDemoComponent } from './components/select/rich-demo';
import { SelectModule } from '../components/select.module';
import { SelectSectionComponent } from './components/select-section';
import { SingleDemoComponent } from './components/select/single-demo';

@NgModule({
  declarations: [
    DemoComponent,
    SelectSectionComponent,
    ChildrenDemoComponent,
    MultipleDemoComponent,
    RichDemoComponent,
    SingleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectModule,
    TabsModule,
    ButtonsModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [DemoComponent]
})

export class SelectDemoModule {
}
