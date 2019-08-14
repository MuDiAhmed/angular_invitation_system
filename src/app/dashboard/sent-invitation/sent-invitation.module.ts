import { NgModule } from '@angular/core';

import { SentInvitationComponent } from './sent-invitation.component';
import {SentInvitationRoutingModule} from "./sent-invitation-routing.module";

@NgModule({
    imports: [SentInvitationRoutingModule],
    declarations: [SentInvitationComponent],
    exports: [SentInvitationComponent]
})

export class SentInvitationModule { }
