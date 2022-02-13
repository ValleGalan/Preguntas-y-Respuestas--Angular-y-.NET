import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';


const routes: Routes = [
  {path:'',redirectTo:"/bienvenidos",pathMatch:'full'},//si esta vacio
  
  {path: "bienvenidos",component: BienvenidaComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:'**',redirectTo:'/bienvenidos',pathMatch:'full'} //SIEMPRE AL FINAL!!xq lee secuencialmente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
