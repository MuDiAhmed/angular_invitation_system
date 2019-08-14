import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedInvitationComponent } from './received-invitation.component';

describe('ReceivedInvitationComponent', () => {
  let component: ReceivedInvitationComponent;
  let fixture: ComponentFixture<ReceivedInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
