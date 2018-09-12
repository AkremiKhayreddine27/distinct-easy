import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialNightsComponent } from './potential-nights.component';

describe('PotentialNightsComponent', () => {
  let component: PotentialNightsComponent;
  let fixture: ComponentFixture<PotentialNightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialNightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialNightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
