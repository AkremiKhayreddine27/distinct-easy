import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueDistributionPlatformComponent } from './revenue-distribution-platform.component';

describe('RevenueDistributionPlatformComponent', () => {
  let component: RevenueDistributionPlatformComponent;
  let fixture: ComponentFixture<RevenueDistributionPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueDistributionPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueDistributionPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
