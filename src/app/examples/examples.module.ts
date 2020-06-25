import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableHandleButtonClicksComponent } from './observable-handle-button-clicks/observable-handle-button-clicks.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HttpTestComponent } from './http-test/http-test.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';

const exampleRoutes: Routes = [
  { path: '',   redirectTo: 'pokemon', pathMatch: 'full'   },
  {
    path: 'observable-handle-button-clicks',
    component: ObservableHandleButtonClicksComponent
  },
  {
    path: 'http-test',
    component: HttpTestComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
];

@NgModule({
  declarations: [ObservableHandleButtonClicksComponent, HttpTestComponent, PokemonComponent],
  exports: [ObservableHandleButtonClicksComponent,HttpTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class ExamplesModule { }
