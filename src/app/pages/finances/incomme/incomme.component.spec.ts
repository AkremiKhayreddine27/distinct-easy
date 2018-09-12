import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncommeComponent } from './incomme.component';

describe('IncommeComponent', () => {
  let component: IncommeComponent;
  let fixture: ComponentFixture<IncommeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncommeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
