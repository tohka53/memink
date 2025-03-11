import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expo3Component } from './expo3.component';

describe('Expo3Component', () => {
  let component: Expo3Component;
  let fixture: ComponentFixture<Expo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Expo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
