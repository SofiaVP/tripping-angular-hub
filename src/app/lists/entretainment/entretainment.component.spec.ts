import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretainmentComponent } from './entretainment.component';

describe('EntretainmentComponent', () => {
  let component: EntretainmentComponent;
  let fixture: ComponentFixture<EntretainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
