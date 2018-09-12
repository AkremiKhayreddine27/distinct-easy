import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialRevenuesBackComponent } from './potential-revenues-back.component';

describe('PotentialRevenuesBackComponent', () => {
  let component: PotentialRevenuesBackComponent;
  let fixture: ComponentFixture<PotentialRevenuesBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialRevenuesBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialRevenuesBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
