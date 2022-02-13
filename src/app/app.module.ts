import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modulos

//componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importaciones
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
