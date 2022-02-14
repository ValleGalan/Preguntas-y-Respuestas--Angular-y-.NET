import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';


const routes: Routes = [
  {path:'',redirectTo:"/bienvenidos",pathMatch:'full'},//si esta vacio
  
  {path:'inicio',component:InicioComponent,children:[
    {path: '',component: BienvenidaComponent },
    {path:'login',component:LoginComponent},
    {path:"register",component:RegisterComponent},
  ]},
  
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',component:CuestionariosComponent},
    {path:'cambiarPassword',component:CambiarPasswordComponent}
  ]},
  {path:'**',redirectTo:'/inicio',pathMatch:'full'} //SIEMPRE AL FINAL!!xq lee secuencialmente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
