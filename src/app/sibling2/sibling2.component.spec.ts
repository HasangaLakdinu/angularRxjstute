import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling2Component } from './sibling2.component';

describe('Sibling2Component', () => {
  let component: Sibling2Component;
  let fixture: ComponentFixture<Sibling2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sibling2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
