import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',   redirectTo: 'examples', pathMatch: 'full'   },
  {
    path: 'examples',
    loadChildren: () => import('./examples/examples.module')
    .then(module => module.ExamplesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
