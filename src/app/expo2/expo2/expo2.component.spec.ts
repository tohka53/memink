import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expo2Component } from './expo2.component';

describe('Expo2Component', () => {
  let component: Expo2Component;
  let fixture: ComponentFixture<Expo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Expo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
