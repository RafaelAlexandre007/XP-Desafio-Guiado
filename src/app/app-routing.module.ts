import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { PipesComponent } from './pipes/pipes.component';
import { Rounting1Component } from './rounting1/rounting1.component';
import { RoutingComponent } from './routing/routing.component';
import { ServicesComponent } from './services/services.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: 'cicles', component: CicleLifeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'routing1/:id', component: Rounting1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
