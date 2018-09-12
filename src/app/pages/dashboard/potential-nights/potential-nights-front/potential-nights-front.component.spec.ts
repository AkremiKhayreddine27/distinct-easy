import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialNightsFrontComponent } from './potential-nights-front.component';

describe('PotentialNightsFrontComponent', () => {
  let component: PotentialNightsFrontComponent;
  let fixture: ComponentFixture<PotentialNightsFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialNightsFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialNightsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
