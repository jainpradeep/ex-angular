import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAngularComponent } from './ex-angular.component';

describe('ExAngularComponent', () => {
  let component: ExAngularComponent;
  let fixture: ComponentFixture<ExAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
