import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./sent-invitation/sent-invitation.module').then(mod => mod.SentInvitationModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule { }
