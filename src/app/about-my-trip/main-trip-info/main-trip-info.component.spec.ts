import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTripInfoComponent } from './main-trip-info.component';

describe('MainTripInfoComponent', () => {
  let component: MainTripInfoComponent;
  let fixture: ComponentFixture<MainTripInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTripInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTripInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
