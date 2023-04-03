import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  {path : 'missionlist', component: MissionlistComponent},
  {path : 'missionDetails/:fnumber' , component : MissiondetailsComponent},
  { path: '',   redirectTo: '/missionlist', pathMatch: 'full' },
  { path: '**', component: MissionlistComponent },
  // {path:'', redirectTo: 'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
