import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTripInfoComponent } from './extra-trip-info.component';

describe('ExtraTripInfoComponent', () => {
  let component: ExtraTripInfoComponent;
  let fixture: ComponentFixture<ExtraTripInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraTripInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraTripInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
