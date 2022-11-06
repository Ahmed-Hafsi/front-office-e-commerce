import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:"Home", component:HomeComponent },
  {path:"Login", component:LoginComponent},
  {path:"Signup", component: SignupComponent},
  {path:"AddP", component:ProduitComponent},
  {path:"AddF", component:FournisseurComponent},
  {path:"", component:HomeComponent },
  {path:"Contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
