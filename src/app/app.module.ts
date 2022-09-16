import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
import { ServicesComponent } from './services/services.component';
import { TodoListService } from './todoList.service';
import { TemplatesComponent } from './templates/templates.component';
import { RoutingComponent } from './routing/routing.component';
import { Rounting1Component } from './rounting1/rounting1.component';

export const TEMA = new InjectionToken<string>('app.theme');

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    TimerComponent,
    PipesComponent,
    CicleLifeComponent,
    CepPipe,
    CpfPipe,
    JoinStringsPipe,
    ServicesComponent,
    TemplatesComponent,
    RoutingComponent,
    Rounting1Component,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [TodoListService, { provide: TEMA, useValue: 'dark' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
