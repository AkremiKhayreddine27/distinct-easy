import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialRevenuesComponent } from './potential-revenues.component';

describe('PotentialRevenuesComponent', () => {
  let component: PotentialRevenuesComponent;
  let fixture: ComponentFixture<PotentialRevenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialRevenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
