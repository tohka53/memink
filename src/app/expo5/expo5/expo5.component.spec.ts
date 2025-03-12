import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expo5Component } from './expo5.component';

describe('Expo5Component', () => {
  let component: Expo5Component;
  let fixture: ComponentFixture<Expo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Expo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
