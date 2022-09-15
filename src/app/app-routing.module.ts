import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'cicles', component: CicleLifeComponent},
  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
