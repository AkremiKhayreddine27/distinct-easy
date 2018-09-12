import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightDistributionPlatformComponent } from './night-distribution-platform.component';

describe('NightDistributionPlatformComponent', () => {
  let component: NightDistributionPlatformComponent;
  let fixture: ComponentFixture<NightDistributionPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightDistributionPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightDistributionPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
