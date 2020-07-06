import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalStuffComponent } from './vital-stuff.component';

describe('VitalStuffComponent', () => {
  let component: VitalStuffComponent;
  let fixture: ComponentFixture<VitalStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
