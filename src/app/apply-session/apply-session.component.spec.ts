import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySessionComponent } from './apply-session.component';

describe('ApplySessionComponent', () => {
  let component: ApplySessionComponent;
  let fixture: ComponentFixture<ApplySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplySessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
