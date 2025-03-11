import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expo1Component } from './expo1.component';

describe('Expo1Component', () => {
  let component: Expo1Component;
  let fixture: ComponentFixture<Expo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Expo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
