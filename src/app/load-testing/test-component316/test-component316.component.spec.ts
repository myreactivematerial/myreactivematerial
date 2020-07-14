import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent316Component } from './test-component316.component';

describe('TestComponent316Component', () => {
  let component: TestComponent316Component;
  let fixture: ComponentFixture<TestComponent316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
