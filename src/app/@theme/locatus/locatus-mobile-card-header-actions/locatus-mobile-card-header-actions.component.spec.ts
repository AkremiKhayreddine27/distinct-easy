import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatusMobileCardHeaderActionsComponent } from './locatus-mobile-card-header-actions.component';

describe('LocatusMobileCardHeaderActionsComponent', () => {
  let component: LocatusMobileCardHeaderActionsComponent;
  let fixture: ComponentFixture<LocatusMobileCardHeaderActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatusMobileCardHeaderActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatusMobileCardHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
