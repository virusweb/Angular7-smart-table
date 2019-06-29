import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'smart', component: SmartTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
