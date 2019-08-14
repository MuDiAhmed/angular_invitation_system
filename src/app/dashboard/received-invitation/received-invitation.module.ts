import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivedInvitationRoutingModule } from './received-invitation-routing.module';
import { ReceivedInvitationComponent } from './received-invitation.component';


@NgModule({
  declarations: [ReceivedInvitationComponent],
  imports: [
    CommonModule,
    ReceivedInvitationRoutingModule
  ]
})
export class ReceivedInvitationModule { }
