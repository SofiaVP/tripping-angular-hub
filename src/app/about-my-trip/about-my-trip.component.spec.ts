import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyTripComponent } from './about-my-trip.component';

describe('AboutMyTripComponent', () => {
  let component: AboutMyTripComponent;
  let fixture: ComponentFixture<AboutMyTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMyTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
