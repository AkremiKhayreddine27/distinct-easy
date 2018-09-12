import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialRevenuesFrontComponent } from './potential-revenues-front.component';

describe('PotentialRevenuesFrontComponent', () => {
  let component: PotentialRevenuesFrontComponent;
  let fixture: ComponentFixture<PotentialRevenuesFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialRevenuesFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialRevenuesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
