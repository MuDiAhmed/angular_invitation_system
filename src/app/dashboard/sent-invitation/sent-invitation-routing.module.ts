import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SentInvitationComponent} from "./sent-invitation.component";


const routes: Routes = [
  {
    path: 'sent',
    component: SentInvitationComponent
  },
  {
    path: '',
    redirectTo: 'sent'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SentInvitationRoutingModule { }
