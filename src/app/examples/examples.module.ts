import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableHandleButtonClicksComponent } from './observable-handle-button-clicks/observable-handle-button-clicks.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HttpTestComponent } from './http-test/http-test.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';

const exampleRoutes: Routes = [
  { path: '',   redirectTo: 'material', pathMatch: 'full'   },
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
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'material',
    component: MaterialExamplesComponent
  },
];

@NgModule({
  declarations: [ObservableHandleButtonClicksComponent, HttpTestComponent, PokemonComponent, TodoComponent, MaterialExamplesComponent],
  exports: [ObservableHandleButtonClicksComponent, HttpTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class ExamplesModule { }
