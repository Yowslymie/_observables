import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

// Module used for all shared data (e.g filiaal-autocomplete, persoon-autocomplete)

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:  [
  MaterialModule
  ]
})
export class SharedModule { }
