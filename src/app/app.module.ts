import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CicleLifeComponent } from './cicle-life/cicle-life.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
import { ServicesComponent } from './services/services.component';
import { TodoListService } from './todoList.service';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    TodoListService,
    { provide: TEMA, useValue: 'dark' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
