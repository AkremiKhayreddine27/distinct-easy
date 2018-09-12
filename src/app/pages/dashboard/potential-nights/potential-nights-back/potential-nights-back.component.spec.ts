import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialNightsBackComponent } from './potential-nights-back.component';

describe('PotentialNightsBackComponent', () => {
  let component: PotentialNightsBackComponent;
  let fixture: ComponentFixture<PotentialNightsBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialNightsBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialNightsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
