import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { ContactUsComponent } from './contact-us/contact-us.component';


import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"toHome", component:HomeComponent},
  {path:"toContactUs", component:ContactUsComponent},
  {path:"toAboutUs",component:AboutUsComponent},

 
 // {path:"editProfile/:id", component:EditCustomerComponent},
  {path: '', redirectTo: '/toHome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
