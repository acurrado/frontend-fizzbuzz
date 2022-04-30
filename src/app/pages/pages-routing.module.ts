import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  { path: 'fizzbuzz', component: PagesComponent, },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
})
export class PagesRoutingModule { }
