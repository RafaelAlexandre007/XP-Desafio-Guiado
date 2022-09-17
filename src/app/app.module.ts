import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { BackEndComponent } from './back-end/back-end.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

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
    BackEndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [TodoListService, { provide: TEMA, useValue: 'dark' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
