import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatusCardHeaderActionsComponent } from './locatus-card-header-actions.component';

describe('LocatusCardHeaderActionsComponent', () => {
  let component: LocatusCardHeaderActionsComponent;
  let fixture: ComponentFixture<LocatusCardHeaderActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatusCardHeaderActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatusCardHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
