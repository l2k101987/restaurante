import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { MesasComponent } from './administracion/mesas/mesas.component';


const routes: Routes = [
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'login',component:LoginComponent},
  {path:'mesas',component:MesasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
