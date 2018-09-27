import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatInputModule,
  MatListModule, MatFormFieldModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [MatButtonModule, MatInputModule,
  MatListModule, MatFormFieldModule,
  MatIconModule, MatToolbarModule, FlexLayoutModule];
@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule { }
